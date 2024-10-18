import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookClubSchema = Yup.object().shape({
  name: Yup.string().required('Book club name is required'),
  description: Yup.string().required('Description is required')
});

function BookClubForm() {
  return (
    <div>
      <h2>Create a New Book Club</h2>
      <Formik
        initialValues={{ name: '', description: '' }}
        validationSchema={BookClubSchema}
        onSubmit={(values, { resetForm }) => {
          fetch('/api/bookclubs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
          }).then(() => resetForm());
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Name</label>
              <Field name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label>Description</label>
              <Field name="description" />
              <ErrorMessage name="description" component="div" />
            </div>
            <button type="submit">Create Book Club</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookClubForm;
