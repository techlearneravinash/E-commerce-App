import React, { useState } from "react";

function ProductList({ products, addToCart, removeProduct }) {
  const [clickedProducts, setClickedProducts] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setClickedProducts([...clickedProducts, product.id]);
  };

  return (
    <div className="card shadow p-4">
      <h2 className="text-center text-primary mb-4">Product List</h2>
      {products.length === 0 ? (
        <p className="text-center text-muted">No products available. Please add some!</p>
      ) : (
        <ul className="list-group">
          {products.map((product) => (
            <li
              key={product.id}
              className="list-group-item d-flex justify-content-between align-items-center mb-2"
              style={{ borderRadius: "8px", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)" }}
            >
              <div>
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1 text-muted">
                  {product.description || "No description provided."}
                </p>
                <p className="fw-bold">Price: ₹{product.price}</p>
              </div>
              <div>
                {!clickedProducts.includes(product.id) ? (
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <span className="text-success fw-bold">Added</span>
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
