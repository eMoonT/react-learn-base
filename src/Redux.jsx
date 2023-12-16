import { useSelector,useDispatch } from "react-redux"
import { increment,decrement,addToNum } from "./store/modules/counterStore"
import { fetchChannelList } from "./store/modules/channelStore"
import { useEffect } from "react"

const App = () => {
  const {count} = useSelector(state => state.counter)
  const {channelList} = useSelector(state => state.channel)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchChannelList())
  },[dispatch])

  return (
    <div>
      <button onClick={() => dispatch(decrement())} className="px-6 py-2 bg-blue-300 rounded-lg">-</button>
      {count}
      <button onClick={() => dispatch(increment())} className="px-6 py-2 bg-blue-300 rounded-lg">+</button>
      <button onClick={() => dispatch(addToNum(10))} className="px-6 py-2 bg-blue-300 rounded-lg">+10</button>
      <ul>
        {channelList.map((channel,index) => <li key={index}>{channel.name}</li>)}
      </ul>
    </div>
  )
}

export default App