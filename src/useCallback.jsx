import { useMemo } from "react"
import { useCallback } from "react"
import { useState } from "react"
import { memo } from "react"


const MemoInput = memo(({onChange}) => {
  console.log("tiggerFunc from Input")
  return <input type="text" onChange={(e) => console.log(e.target.value)} />
})

const App = () => {
  const [count,setCount] = useState(0)
  const changeHandle = useCallback((value) => {
    console.log(value)
  },[])
  return (
    <div>App
      {count}
      <MemoInput onChange={changeHandle} />
      <button className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900" onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default App