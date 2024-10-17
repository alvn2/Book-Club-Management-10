<<<<<<< HEAD
// SignIn.jsx
=======
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = ({ onLogin }) => {
<<<<<<< HEAD
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(
          (u) => u.name === username && u.password === password
        );

        if (user) {
          if (typeof onLogin === "function") {
            onLogin(user.role); // Call onLogin only if it's a function
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
            setError(""); // Clear error on input change
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
            setError(""); // Clear error on input change
          }}
          placeholder="Enter your password"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin} className="login-button">
        Log In
      </button>
    </div>
  );
=======
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoading(true);
        fetch("http://localhost:5000/users")
            .then((response) => response.json())
            .then((users) => {
                setLoading(false);
                const user = users.find(
                    (u) => u.username === username && u.password === password
                );

                if (user) {
                    onLogin(user.role);
                    navigate("/");
                } else {
                    setError("Invalid username or password");
                }
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setLoading(false);
                setError("An error occurred. Please try again.");
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
            {loading ? (
                <p>Loading...</p>
            ) : (
                <button onClick={handleLogin} className="login-button">
                    Log In
                </button>
            )}
        </div>
    );
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
};

export default SignIn;
