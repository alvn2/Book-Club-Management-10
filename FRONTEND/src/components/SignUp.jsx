import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making requests
import "./SignUp.css";

const SignUp = ({ onSignUp }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
<<<<<<< HEAD
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(false); // Loading state
=======
  const [error, setError] = useState("");
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setLoading(true); // Start loading
    setError(null); // Reset any previous errors

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/signUp",
        formData
      ); // Make POST request to Flask backend
      console.log(response.data); // Log success response
      navigate("/home"); // Redirect to home page on success
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setError(err.response.data.errors.email); // Set specific error message
      } else {
        setError("Something went wrong. Please try again."); // Generic error message
      }
    } finally {
      setLoading(false); // Stop loading
=======
    // Simulate API call to save user data
    console.log("Form submitted:", formData);

    if (typeof onSignUp === "function") {
      onSignUp(formData); 
      navigate("/");
    } else {
      setError("Signup function is not defined.");
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
<<<<<<< HEAD
        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}{" "}
          {/* Button text changes based on loading state */}
        </button>
=======
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
      </form>
    </div>
  );
};

export default SignUp;
