import "./Register.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { GET_URL } from "../../requestMethods";

const Register = () => {
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${GET_URL}auth/signup`, inputs);
      if (res.data === "new user created") {
        login(dispatch, {
          userName: inputs.userName,
          password: inputs.password,
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Register-Container">
      <div className="Register-Wrapper">
        <h1 className="Register-Title">SIGN UP</h1>
        <form className="Register-Form">
          <input
            name="userName"
            className="Register-Input"
            placeholder="userName"
            onChange={handleChange}
          />
          <input
            name="email"
            className="Register-Input"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            className="Register-Input"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            name="address"
            className="Register-Input"
            placeholder="Address"
            onChange={handleChange}
          />
          <span className="Register-Agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <Link to="/">
            <span className="Login-Link">Back to Home</span>
          </Link>
          <button className="BtnRegister" onClick={handleClick}>
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
