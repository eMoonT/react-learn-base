import { useState } from "react";

// 父子组件通信
const Son = ({ getMsg }) => {
  const msg = 'this is son msg'
  return <div>
    <button onClick={() => getMsg(msg)} className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900">Clickme</button>
  </div>;
};

const App = () => {
  const [ sonMsg, setSonMsg ] = useState('')
  const getMsg = (msg) => {
    console.log(msg)
    setSonMsg(msg)
  }

  return (
    <div>
      <h1>this is App</h1>
      <h2>this is son msg: {sonMsg}</h2>
      <Son getMsg={getMsg} />
    </div>
  );
};

export default App;
