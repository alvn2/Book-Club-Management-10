import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true); // Start loading

    fetch("http://localhost:5000/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((users) => {
        const user = users.find(
          (u) => u.name === username && u.password === password
        );

        if (user) {
          // Successful login
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
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("An error occurred. Please try again.");
      })
      .finally(() => {
        setLoading(false); // End loading
      });
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
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin} className="login-button" disabled={loading}>
        {loading ? "Logging In..." : "Log In"}
      </button>
    </div>
  );
};

export default SignIn;
