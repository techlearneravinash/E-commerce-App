import React, { useState } from "react";

function AddProduct({ addProduct }) {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price) {
      addProduct({ ...product, id: Date.now() });
      setProduct({ id: "", name: "", description: "", price: "" });
    }
  };

  return (
    <div className="card shadow p-4 mb-4">
      <h2 className="text-center text-primary mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            placeholder="Enter product description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
            rows="3"
          />
        </div>
        <div className="form-group mb-4">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter product price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
