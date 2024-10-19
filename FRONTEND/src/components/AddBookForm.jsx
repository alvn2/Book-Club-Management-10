import React, { useState } from 'react';
// import './AddBookForm.css';

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/addBook", { // Adjust this to your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSuccessMessage("Book added successfully!");
        setFormData({ title: "", author: "", description: "" });
      } else {
        throw new Error("Failed to add the book.");
      }
    } catch (error) {
      console.error("Error adding book:", error);
      setSuccessMessage("Failed to add the book.");
    }
  };

  return (
    <div className="add-book-form">
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default AddBookForm;
