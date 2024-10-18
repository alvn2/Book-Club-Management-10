import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//import api from "../services/api";
import "./BookForm.css";

const BookForm = ({ clubId }) => {
  const validationSchema = Yup.object({
    book_title: Yup.string().required("Title is required"),
    book_author: Yup.string().required("Author is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await api.post(`/addbook/`, { ...values, book_club_id: clubId });
      alert("Book added successfully!");
      resetForm();
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add the book. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="book-form-container">
      <h2>Add a New Book</h2>
      <Formik
        initialValues={{ book_title: "", book_author: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="book_title">Title</label>
              <Field type="text" name="book_title" />
              <ErrorMessage
                name="book_title"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="book_author">Author</label>
              <Field type="text" name="book_author" />
              <ErrorMessage
                name="book_author"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field as="textarea" name="description" />
              <ErrorMessage
                name="description"
                component="div"
                className="error"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              Add Book
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
