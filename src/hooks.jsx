import { useState } from "react";

const useToggle = () => {
  const [show, setShow] = useState(true);
  const toggleClick = () => {
    setShow(!show);
  };

  return [
    show,
    toggleClick,
  ]
}

const App = () => {
  const [show, toggleClick] = useToggle()
  return (
    <div>
      App
      {show && <div>this is a div</div>}
      <button
        onClick={toggleClick}
        className="px-4 py-2 rounded bg-blue-500 focus:bg-blue-700 hover:bg-blue-900"
      >
        Clickme
      </button>
    </div>
  );
};

export default App;
