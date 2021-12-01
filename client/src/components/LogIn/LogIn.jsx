import React, { useState } from "react";
import "./styled.css";

const LogIn = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changes = () => {};

  return (
    <div>
      <h1>LOGIN</h1>
      <form className="loginForm">
        <input
          email="email"
          value={email}
          onChange={changes}
          placeholder="email"
          required
        />
        <input
          password="password"
          value={password}
          onChange={changes}
          placeholder="email"
          required
        />
        <button type="submit" className="btnSubmit" onClick={changes}>
          log
        </button>
      </form>
    </div>
  );
};

export default LogIn;
