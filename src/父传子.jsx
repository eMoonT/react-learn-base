// 父子组件通信
const Son = ({ getMsg, children }) => {
  return <div>this is Son msg: {getMsg} {children}</div>;
};

const App = () => {
  const getMsg = "this is a msg";

  return (
    <div>
      <h1>this is App</h1>
      <Son getMsg={getMsg}>
        <h1>solt test</h1>
      </Son>
    </div>
  );
};

export default App;
