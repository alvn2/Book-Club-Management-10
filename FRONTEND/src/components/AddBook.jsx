import React from "react";
import { useParams } from "react-router-dom";
import BookForm from "./BookForm";

const AddBook = () => {
  const { clubId } = useParams();

  return (
    <div>
      <h2>Add a New Book</h2>
<<<<<<< HEAD
      <BookForm clubId={clubId} />
=======
      <BookForm clubId={clubId} /> 
>>>>>>> fd7a59ff612e1b8e8776d2752400c98617293cd1
    </div>
  );
};

export default AddBook;
