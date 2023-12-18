import { useMemo } from "react"
import { useCallback } from "react"
import { useState } from "react"
import { memo } from "react"

const MemoSon = memo(({msg,list}) =>
{
  console.log('tiggerFunc from Son')
  return <div>this is Son {msg}-{list}</div>
})


const App = () => {
  const [count,setCount] = useState(0)
  const msg = '123'
  const list = useMemo(() => {
    return [1,2,3]
  },[])
  return (
    <div>App
      <MemoSon msg={msg} list={list} />
      {count}
      <button className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900" onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

export default App