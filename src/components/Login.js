import React, { useState } from "react";
import "./Login.css";
import { addUser } from "../userSlice";
import { store } from "../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [passwordInput, setPassword] = useState("");
  const [userInput, setUser] = useState("");

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    store.dispatch(addUser(userInput));
    navigate("/profile");
  };

  const isEnabled =
    userInput === "Developer21" && passwordInput == 123456 ? true : false;

  return (
    <div className="login-page">
      <form className="user-form">
        <input
          value={userInput}
          onChange={handleUserChange}
          type="text"
          placeholder="username"
        />
        <input
          value={passwordInput}
          onChange={handlePasswordChange}
          type="password"
          placeholder="password"
        />
        <button
          style={{ display: isEnabled ? "block" : "none" }}
          className="login-button"
          onClick={handleSubmit}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
