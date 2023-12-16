import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    return (
    <>
      {/* <Link to={"/article?id=123&name=jack"}>article</Link> */}
        <button onClick={() => navigate("/article/1001/jack")}>article</button>
        <button onClick={() => navigate('/layout')}>layout</button>
        <div>Login</div>
    </>
    );
};

export default Login;
