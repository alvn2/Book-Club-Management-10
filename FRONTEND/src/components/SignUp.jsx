import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./SignUp.css";

const SignUp = ({ onSignUp }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null); 

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/signUp",
        formData
      ); 
      console.log(response.data); 
      navigate("/home");
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setError(err.response.data.errors.email); 
      } else {
        setError("Something went wrong. Please try again."); 
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>} 
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
        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}{" "}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
