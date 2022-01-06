import "./Login.css";
import { useState, useEffect } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { loginError } from "../../redux/userReducer";

if (typeof window !== "undefined") {
  injectStyle();
}

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
    if (error) {
      toast.dark("incorrect user credentials");
      dispatch(loginError());
    }
  }, [user, navigate, error, dispatch]);

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
          <Link to="/">
            <span className="Login-Link">Back to Home</span>
          </Link>
          <button
            className="BtnLogin"
            onClick={handleClick}
            disabled={isFetching}
          >
            LOGIN
          </button>
          <span className="Login-Span">new in Malbec?</span>
          <button className="BtnNewAccount" onClick={handleSignup}>
            Create new Account
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
