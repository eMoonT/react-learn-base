import { useReducer } from "react"

const reducer = ((state, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case "DEC":
      return state - 1;
    case "UPD":
      return state = action.payload
    default:
      return state
  }
})
const App = () => {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>App
      <button className="px-6 py-2 bg-blue-300 rounded-lg" onClick={() => dispatch({type: 'DEC'})}>-</button>
      {count}
      <button className="px-6 py-2 bg-blue-300 rounded-lg" onClick={() => dispatch({type: 'INC'})}>+</button>
      <button className="px-6 py-2 bg-blue-300 rounded-lg" onClick={() => dispatch({type: 'UPD', payload: 100})}>+100</button>
    </div>
  )
}

export default App