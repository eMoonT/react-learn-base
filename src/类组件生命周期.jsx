import { useState } from "react"
import { Component } from "react"

class Son extends Component {
  componentDidMount(){
    console.log("componentDidMount")
    this.timer = setInterval(() => {
      console.log("setInterval")
    },1000)
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
    clearInterval(this.timer)
  }
  render(){
    return <div>this is son </div>
  }
}

const App = () => {
  const [status,setStatus] = useState(true)
  return (
    <div>
      {status && <Son /> }
      <button className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900" onClick={() => setStatus(!status)}>clickme</button>
    </div>
  )
}

export default App