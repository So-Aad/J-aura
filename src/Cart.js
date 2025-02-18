import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import "./Cart.css";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty!</p>
          <Link to="/jewelry" className="link-btn">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.picture} alt={product.title} className="cart-item-img" />
              <div className="cart-item-details">
                <p>{product.title}</p>
                <p>Price: {product.price}Dh</p>
                <p>Quantity: {product.quantity}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(product.id, "increase")}><FaPlus /></button>
                  <button onClick={() => updateQuantity(product.id, "decrease")}><FaMinus /></button>
                  <button onClick={() => removeFromCart(product.id)}><FaTrash /></button>
                </div>
              </div>
              <p>Total: {product.price * product.quantity}Dh</p>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: {calculateTotal()}Dh</h3>
          </div>
        </div>
      )}
      <div className="cart-actions">
        
        {/* Conditionally render the "Buy Now" button */}
        {cart.length > 0 && (
          <Link to="/payment" className="pay">
            <button className="btn">Buy Now</button>
          </Link>
          
        )}
      </div>
    </div>
  );
}

export default Cart;
