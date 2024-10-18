import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ReviewSchema = Yup.object().shape({
  rating: Yup.number().min(1).max(5).required('Rating is required'),
  comment: Yup.string().required('Comment is required')
});

function ReviewForm() {
  return (
    <div>
      <h2>Leave a Review</h2>
      <Formik
        initialValues={{ rating: '', comment: '', book_id: '', user_id: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, { resetForm }) => {
          fetch('/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
          }).then(() => resetForm());
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Rating (1-5)</label>
              <Field name="rating" type="number" />
              <ErrorMessage name="rating" component="div" />
            </div>
            <div>
              <label>Comment</label>
              <Field name="comment" />
              <ErrorMessage name="comment" component="div" />
            </div>
            <div>
              <label>Book ID</label>
              <Field name="book_id" />
              <ErrorMessage name="book_id" component="div" />
            </div>
            <div>
              <label>User ID</label>
              <Field name="user_id" />
              <ErrorMessage name="user_id" component="div" />
            </div>
            <button type="submit">Submit Review</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ReviewForm;
