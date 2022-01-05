import "./newUser.css";
import { useState } from "react";
import { addMalbecUsers } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
if (typeof window !== "undefined") {
  injectStyle();
}

export default function NewUser() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault(e);
    const user = { ...inputs };
    addMalbecUsers(user, dispatch);
    toast("new product created!");
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            name="userName"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            onChange={handleChange}
            type="email"
            placeholder="email"
            name="email"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            name="password"
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Address"
            name="address"
          />
        </div>
        <button onClick={handleClick} className="newUserButton">
          Create
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
