import { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, SetDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => console.log("fabbbb", res.data))
      .catch((err) => setError(err.message));
  };
  return (
    <>
      <h1>Product Manager</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => SetDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ProductForm;
