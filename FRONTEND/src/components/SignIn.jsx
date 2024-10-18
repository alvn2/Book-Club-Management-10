import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./SignIn.css";

const SignIn = () => {
  const { login, error } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const isLoggedIn = await login(username, password);
    if (isLoggedIn) {
      navigate("/");
    } else {
      setErrorMessage("Invalid username or password");
    }
=======
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
>>>>>>> fd7a59ff612e1b8e8776d2752400c98617293cd1
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
<<<<<<< HEAD
            setErrorMessage("");
=======
            setError(""); 
>>>>>>> fd7a59ff612e1b8e8776d2752400c98617293cd1
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
<<<<<<< HEAD
            setErrorMessage("");
=======
            setError(""); 
>>>>>>> fd7a59ff612e1b8e8776d2752400c98617293cd1
          }}
          placeholder="Enter your password"
        />
      </div>
<<<<<<< HEAD
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display context error */}
      <button onClick={handleLogin} className="login-button">
        Log In
=======
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin} className="login-button" disabled={loading}>
        {loading ? "Logging In..." : "Log In"}
>>>>>>> fd7a59ff612e1b8e8776d2752400c98617293cd1
      </button>
    </div>
  );
};

export default SignIn;
