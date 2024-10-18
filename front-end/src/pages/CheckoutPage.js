import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/toysSlice";

function CheckoutPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.toys.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div>
      <h1>Checkout</h1>
      <div className="checkout-grid">
        {cart.map((item, index) => (
          <div key={index} className="checkout-card">
            <img src={item.image} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <p>Total: ${totalPrice}</p>
      <div className="button-links">
        <Link to="/" className="button-link">
          Go to Home
        </Link>
        <br />
        <Link to="/toys" className="button-link">
          Go to Toys
        </Link>
      </div>
    </div>
  );
}

export default CheckoutPage;