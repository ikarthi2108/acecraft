import React from 'react';
import { useCart } from 'react-use-cart';
import '../Styles/Cart.css';

const Cart = () => {
  const { items, removeItem, updateItemQuantity } = useCart();

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleIncreaseQuantity = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + 1;
      updateItemQuantity(itemId, newQuantity);
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      updateItemQuantity(itemId, newQuantity);
    }
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-black">Your bag total is ₹{totalPrice}</h2>
      {items.map((item) => (
        <div key={item.id}>
          <hr />
          <div className="row align-items-center">
            <div className="col-md-2">
              <img src={item.image} alt={item.title} style={{ width: '380px' }} />
            </div>
            <div className="col-md-4 ms-5">
              <h5 id="title">{item.title}</h5>
              <p className="remove-text" onClick={() => handleRemoveItem(item.id)}>Remove</p>
            </div>
            <div className="col-md-3 me-5">
              <button className="btn btn-sm btn-secondary me-2" onClick={() => handleDecreaseQuantity(item.id)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button className="btn btn-sm btn-secondary ms-2" onClick={() => handleIncreaseQuantity(item.id)}>
                +
              </button>
            </div>
            <div className="col-md-2 text-black">
              <h3>₹{item.price * item.quantity}</h3>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <h3 className="text-center mt-4">₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;