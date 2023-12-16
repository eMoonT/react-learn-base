import { useRef } from "react"
import { useState } from "react"

const App = () => {
  const [count, setCount] = useState('')
  const inputRef = useRef(null)

  const handleClick = () => {
    console.dir(inputRef)
  }

  return (
    <div className="w-full flex justify-center">
      <h1>{count}</h1>
      <button onClick={handleClick} className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900">Click me</button>
      <input ref={inputRef} type="text" onChange={(e) => setCount(e.target.value)} className="border-black-400 border"/>
    </div>
  )
}

export default App