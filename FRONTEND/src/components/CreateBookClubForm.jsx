import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBookClubForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  const navigate = useNavigate(); 
>>>>>>> fd7a59ff612e1b8e8776d2752400c98617293cd1

  const initialValues = {
    name: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/create-bookclub",
        values
      );
      setSuccessMessage("Book club created successfully!");
      setSubmitting(false);
<<<<<<< HEAD
      navigate("/bookclubs");
=======
      navigate("/book-clubs"); 
>>>>>>> fd7a59ff612e1b8e8776d2752400c98617293cd1
    } catch (error) {
      setErrorMessage("Error creating book club. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h2>Create a New Book Club</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="field">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="field">
              <label htmlFor="description">Description:</label>
              <Field as="textarea" id="description" name="description" />
              <ErrorMessage
                name="description"
                component="div"
                className="error"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Create Book Club
            </button>
            {successMessage && <p className="success">{successMessage}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateBookClubForm;
