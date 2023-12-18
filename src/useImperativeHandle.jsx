import { useImperativeHandle } from "react"
import { forwardRef } from "react"
import { useRef } from "react"

const Son = forwardRef((props,ref) => {
  const inputRef = useRef(null)
  const handleRef = () => {
    inputRef.current.focus()
  }
  useImperativeHandle(ref,() => {
    return { handleRef }
  })
  return (
    <input className="borde" type="text" ref={inputRef}/>
  )
})

const App = () => {
  const sonRef = useRef(null)
  const showRef = () => {
    console.log("focus",sonRef.current)
    sonRef.current.handleRef()
  }
  return (
    <div>
      <Son ref={sonRef} />
      <button onClick={showRef} className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900">focus</button>
    </div>
  )
}

export default App