<<<<<<< HEAD
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../services/api";

const BookForm = ({ clubId }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    yearPublished: Yup.number()
      .required("Year is required")
      .min(1800, "Year must be after 1800")
      .max(new Date().getFullYear(), `Year can't be in the future`),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await api.post(`/bookclubs/${clubId}/books`, values);
      alert("Book added successfully!");
      resetForm();
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add the book. Please try again.");
    } finally {
=======
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../Services/Api';
import "./BookForm.css";

const BookForm = ({ clubId }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues = {
    title: '',
    author: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await api.post(`/book-clubs/${clubId}/books`, values);
      setSuccessMessage('Book added successfully!');
      setSubmitting(false);
    } catch (error) {
      setErrorMessage('Error adding book. Please try again.');
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
      setSubmitting(false);
    }
  };

  return (
    <Formik
<<<<<<< HEAD
      initialValues={{ title: "", author: "", yearPublished: "" }}
=======
      initialValues={initialValues}
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
<<<<<<< HEAD
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" name="author" />
            <ErrorMessage name="author" component="div" />
          </div>

          <div>
            <label htmlFor="yearPublished">Year Published</label>
            <Field type="number" name="yearPublished" />
            <ErrorMessage name="yearPublished" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Add Book
          </button>
=======
            <label htmlFor="title">Title:</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <Field type="text" id="author" name="author" />
            <ErrorMessage name="author" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Book
          </button>
          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
        </Form>
      )}
    </Formik>
  );
};

<<<<<<< HEAD
export default BookForm;
=======
export default BookForm;
>>>>>>> e55f94ab49dd1e580fb122e032d660fcc7afc727
