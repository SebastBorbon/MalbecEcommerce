import "./Login.css";
import { useState, useEffect } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
  };

  const handleSignup = () => {
    navigate("/register");
  };
  return (
    <div className="Login-Container">
      <div className="Login-Wrapper">
        <h1 className="Login-Title">SIGN IN</h1>
        <form className="Login-Form">
          <input
            className="Login-Input"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="Login-Input"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="Login-Link">forgot the password?</span>
          <button
            className="BtnLogin"
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && <span className="Login-Error">Something went wrong</span>}
          <span className="Login-Span">new in Malbec?</span>
          <button className="BtnNewAccount" onClick={handleSignup}>
            Create new Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
