import { useState } from "react";
import { useEffect } from "react";

const URL = "http://localhost:3000/uploaded";

const App = () => {
  const [count, setCount] = useState(0);

  // 不传组件渲染和更新执行，空数组只在组件渲染时执行，指定依赖项只在渲染和依赖项变化时执行
  useEffect(() => {
    console.log("useEffect is running");
    // async function getSession() {
    //   const res = await fetch(URL)
    //   const list = await res.json()
    //   console.log(list)
    // }
    // getSession()
  }, [count]);

  return (
    <div>
      App
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900"
      >
        +{count}
      </button>
    </div>
  );
};

export default App;
