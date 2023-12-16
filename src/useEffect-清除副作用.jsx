import { useState } from "react";
import { useEffect } from "react";

const Son = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("first")
    },1000)

    return () => {
      clearInterval(timer)
    }
  })
  return (
    <div>this is a Son</div>
  )
}

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      App
      {show && <Son />}
      <button
        onClick={() => {
          setShow(!show)
        }}
        className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900"
      >
        clickme
      </button> 
    </div>
  );
};

export default App;
