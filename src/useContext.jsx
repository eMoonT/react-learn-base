import { useContext,createContext } from "react";

const MsgContext = createContext()

const B = () => {
  const msg = useContext(MsgContext);
  return <div>B components {msg}</div>;
};
const A = () => {
  return (
    <div>
      A components
      <B />
    </div>
  );
};

const App = () => {
  const msg = "this is a msg";
  return (
    <div>
      <MsgContext.Provider value={msg}>
        App
        <A />
      </MsgContext.Provider>
    </div>
  );
};

export default App;
