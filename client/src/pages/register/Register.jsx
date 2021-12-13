import "./Register.css";

const Register = () => {
  return (
    <div className="Register-Container">
      <div className="Register-Wrapper">
        <h1 className="Register-Title">SIGN UP</h1>
        <form className="Register-Form">
          <input className="Register-Input" placeholder="Name" />
          <input className="Register-Input" placeholder="Last Name" />
          <input className="Register-Input" placeholder="Email" />
          <input className="Register-Input" placeholder="Password" />
          <input className="Register-Input" placeholder="Confirm Password" />
          <span className="Register-Agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="BtnRegister">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
