import { useState } from "react"

const B = ({getFunc}) => {
  const bMsg = 'this is b msg'
  return (
    <div>
      <button onClick={() => getFunc(bMsg)} className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900">B Clicke</button>
    </div>
  )
}
const C = ({Bmsg}) => {
  return (
    <div>C {Bmsg}</div>
  )
}
const App = () => {
  const [Bmsg, setBmsg] = useState("")
  const getFunc = (msg) => {
    console.log(msg)
    setBmsg(msg)
  }
  return (
    <div>App
      <B getFunc={getFunc}/>
      <C Bmsg={Bmsg}/>
    </div>
  )
}

export default App