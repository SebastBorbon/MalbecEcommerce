import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./Login.css";
import { useHistory } from "react-router";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (user) history.push("/Home");
  }, [user, history]);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
  };

  return (
    <div className="Login-Container">
      <div className="Login-Wrapper">
        <h1 className="Login-Title">Admin Panel</h1>
        <form className="Login-Form">
          <input
            className="Login-Input"
            type="text"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="Login-Input"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="BtnLogin" onClick={handleClick}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
