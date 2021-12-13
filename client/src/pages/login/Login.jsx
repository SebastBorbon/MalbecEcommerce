import "./Login.css";

const Login = () => {
  return (
    <div className="Login-Container">
      <div className="Login-Wrapper">
        <h1 className="Login-Title">SIGN IN</h1>
        <form className="Login-Form">
          <input className="Login-Input" placeholder="Username" />
          <input className="Login-Input" placeholder="Password" />
          <a className="Login-Link" href="Home">
            forgot the password?
          </a>
          <button className="BtnLogin">LOGIN</button>
          <span className="Login-Span">new in Malbec?</span>
          <button className="BtnLogin">Create new Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
