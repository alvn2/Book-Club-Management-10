import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  // Loading state
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const users = await response.json();
      const user = users.find(
        (u) => u.name === username && u.password === password
      );

      if (user) {
        if (typeof onLogin === "function") {
          onLogin(user.role); 
          navigate("/home"); 
        } else {
          console.error("onLogin is not a function");
          setError("Login function is not defined.");
        }
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
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
            setError("");
          }}
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          placeholder="Enter your password"
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button
        onClick={handleLogin}
        className="login-button"
        disabled={loading} // Disable button when loading
      >
        {loading ? "Logging in..." : "Log In"}
      </button>
    </div>
  );
};

export default SignIn;
