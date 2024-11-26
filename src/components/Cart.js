import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="card shadow p-4">
      <h2 className="text-center text-primary mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center mb-2"
                style={{ borderRadius: "8px", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)" }}
              >
                <div>
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1 text-muted">
                    ₹{item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-end">
            <h4>
              <span className="text-success">Total:</span> ₹{total.toFixed(2)}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
