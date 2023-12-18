import { useEffect } from "react"
import useStore from "./store"

// const useStore = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({count: state.count+1})),
// }))


const App = () => {
  const { count,inc,fruitList,fetchFruitList } = useStore()
  useEffect(() => {
    fetchFruitList() 
  },[fetchFruitList])
  return (
    <div>
      {count}
      {fruitList.map((item,index) => <p key={index}>{item.name}</p>)}
      <button className="py-2 px-2 bg-blue-300" onClick={inc}>+</button>
    </div>
  )
}

export default App