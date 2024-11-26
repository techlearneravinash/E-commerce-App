import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Add product
  const addProduct = (newProduct) => setProducts([...products, newProduct]);

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product
  const removeProduct = (id) =>
    setProducts(products.filter((product) => product.id !== id));

  // Remove from cart
  const removeFromCart = (id) =>
    setCart(cart.filter((item) => item.id !== id));

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">React E-Commerce Demo</h1>

        {/* Navigation Links */}
        <nav className="mb-4">
          <Link to="/" className="btn btn-primary mr-2">Add Product</Link>
          <Link to="/products" className="btn btn-secondary mr-2">Product List</Link>
          <Link to="/cart" className="btn btn-success">Cart</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={<AddProduct addProduct={addProduct} />}
          />
          <Route
            path="/products"
            element={
              <ProductList
                products={products}
                addToCart={addToCart}
                removeProduct={removeProduct}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
