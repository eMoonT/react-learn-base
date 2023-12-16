import { useState } from "react";
import reactLog from "./assets/react.svg";
import _ from "lodash";
import ClassNames from "classnames";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { useEffect } from "react";
import axios from "axios";

const list = [
  {
    rpid: 1,
    userInfo: {
      uuid: 3338888,
      avatar:
        "https://i1.hdslb.com/bfs/face/5239df1af516ac0ffdfd76a51d56300989412058.jpg@160w_160h_1c_1s_!web-avatar-comment.avif",
      username: "心动不长存asa",
    },
    content:
      "已学完，这个老师讲的真他妈的，什么叫抽丝剥茧，循循渐进，不像有的老师一上来就搞最终过程，根本听不懂，而且老师那还有很多面试题，笔试题我都买了，经过一个月的猛肝，终于在美团面试的时候一把过，美团的福利我就不多说了，免费换电瓶和充电，不说了老板叫我出餐了.",
    ctime: "2023-10-17 09:43",
    like: 73,
  },
  {
    rpid: 2,
    userInfo: {
      uuid: 3338889,
      avatar:
        "https://i2.hdslb.com/bfs/face/2c31945de336f3572ee31bb2a15d915ba3773809.jpg@160w_160h_1c_1s_!web-avatar-comment.avif",
      username: "red润",
    },
    content:
      "react18入门简单，只要学会useState,useEffect,useRef三个万精油就可以解决大部分业务了，剩下hooks都是性能优化方面的",
    ctime: "2023-10-22 14:45",
    like: 12,
  },
  {
    rpid: 3,
    userInfo: {
      uuid: 3338890,
      avatar:
        "https://i2.hdslb.com/bfs/face/5005ce3cf75c968d4c0ffe3556236f637c466176.jpg@160w_160h_1c_1s_!web-avatar-comment.avif",
      username: "层半小卡车",
    },
    content:
      "听声音感觉很熟悉，原来是柴柴老师，以前就在他个人的号学过React，当时也是顺利找到了实习，课程感觉很适合入门，我当时也是从不会到入门也就用了一星期多点就学完了，还是很感谢老师的课程的。",
    ctime: "2023-10-31 21:01",
    like: 31,
  },
];

const user = {
  uuid: 3338890,
};

const tabs = [
  { type: "hot", text: "最热" },
  { type: "new", text: "最新" },
];

const URL = "http://localhost:3000/data";

const useGetList = (url) => {
  const [commentList, setcommentList] = useState([]);

  useEffect(() => {
    async function getHttp() {
      const res = await axios.get(URL);
      // console.log(data)
      setcommentList(res.data);
    }
    getHttp();
  }, []);

  return [commentList, setcommentList];
};

const Item = ({item, handleDelete}) => {

  return (
    <div className="flex">
      <div className="w-14 h-14 flex-shrink-0">
        <img className="rounded-full bg-contain" src={reactLog} alt="" />
      </div>
      <div className="flex-1 ml-3 pb-2 border-b">
        <h2 className="text-sm text-zinc-700">{item.userInfo.username}</h2>
        <p className="py-2">{item.content}</p>
        <div>
          <p className="inline text-xs font-normal text-zinc-400">
            {item.ctime}
          </p>
          <p className="inline ml-3 text-xs font-normal text-zinc-400">
            {item.like}
          </p>
          {item.userInfo.uuid === user.uuid && (
            <button
              className="ml-2 text-xs font-normal text-zinc-400"
              onClick={() => handleDelete(item.rpid)}
            >
              删除
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // const [commentList, setcommentList] = useState(
  // _.orderBy(list, "like", "desc")
  // );
  const [commentList, setcommentList] = useGetList();

  const inputRef = useRef(null);

  const [comment, setComment] = useState("");
  const handleSubmit = () => {
    setcommentList([
      ...commentList,
      {
        rpid: uuidv4(),
        userInfo: {
          uuid: 3338888,
          avatar:
            "https://i1.hdslb.com/bfs/face/5239df1af516ac0ffdfd76a51d56300989412058.jpg@160w_160h_1c_1s_!web-avatar-comment.avif",
          username: "心动不长存asa",
        },
        content: comment,
        ctime: dayjs(new Date()).format("YYYY-MM-DD HH:mm"),
        like: 0,
      },
    ]);

    // 清空评论
    setComment("");

    //　重新聚焦
    inputRef.current.focus();
  };

  const handleDelete = (rpid) => {
    setcommentList(commentList.filter((item) => item.rpid !== rpid));
  };

  const [tabType, setTabType] = useState("hot");
  const handleTabChange = (type) => {
    setTabType(type);

    if (type === "hot") {
      setcommentList(_.orderBy(commentList, "like", "desc"));
    } else {
      setcommentList(_.orderBy(commentList, "ctime", "desc"));
    }
  };

  return (
    <div id="app" className="px-4 py-3">
      <div className="my-5 flex justify-even space-x-3">
        <img src={reactLog} alt="avg" height={60} width={60} />
        <input
          ref={inputRef}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-4/5 px-2 bg-zinc-100 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          placeholder="说点什么吧"
          type="text"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded text-white bg-sky-500 focus:bg-sky-700 hover:bg-sky-900"
        >
          发布
        </button>
      </div>
      <div className="tab flex items-center">
        <p className="text-2xl">评论</p>
        <p className="text-sm text-zinc-400 ml-2">3</p>
        {tabs.map((item) => (
          <span
            key={item.type}
            // className={`text-sm ml-2 ${tabType === item.type ? "" : "text-zinc-400"}`}
            className={ClassNames("text-sm ml-2 cursor-pointer", {
              "text-zinc-400": tabType !== item.type,
            })}
            onClick={() => handleTabChange(item.type)}
          >
            {item.text}
          </span>
        ))}
      </div>
      {commentList.map((item) => {
        return <Item key={item.rpid} item={item} handleDelete={handleDelete}></Item>;
      })}
    </div>
  );
};

export default App;
