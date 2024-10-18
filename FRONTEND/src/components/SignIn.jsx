import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./SignIn.css";

const SignIn = () => {
  const { login, error } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const isLoggedIn = await login(username, password);
    if (isLoggedIn) {
      navigate("/");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="signin-page">
      <h2>Sign In</h2>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrorMessage("");
          }}
          placeholder="Enter your username"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMessage("");
          }}
          placeholder="Enter your password"
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display context error */}
      <button onClick={handleLogin} className="login-button">
        Log In
      </button>
    </div>
  );
};

export default SignIn;
