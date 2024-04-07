// ShoppingCart.js
import React from "react";

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>
                ${item.price} x {item.quantity}
              </p>
              {/* Add buttons to modify quantity or remove item */}
            </div>
          </li>
        ))}
      </ul>
      {/* Checkout button */}
    </div>
  );
};

export default ShoppingCart;
