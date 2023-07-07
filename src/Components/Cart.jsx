import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import '../Styles/Cart.css';
import Swal from 'sweetalert2'

const Cart = () => {
  const {  removeItem, updateItemQuantity, isEmpty } = useCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch the cart items from the server
    fetch('https://acecraft-deploy.onrender.com/Cartitems')
      .then((response) => response.json())
      .then((data) => setCartItems(data));
  }, []);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
    setCartItems(cartItems.filter((item) => item.id !== itemId));

    // Remove the item from the server data
    fetch(`https://acecraft-deploy.onrender.com/Cartitems/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Item successfully removed from the server data
          console.log('Item removed from server data.');
        }
      })
      .catch((error) => {
        console.error('Error removing item:', error);
      });
  };

  const handleIncreaseQuantity = async (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const newQuantity = Number(cartItems[itemIndex].quantity) + 1;

      try {
        await updateItemQuantity(itemId, newQuantity);
        const updatedItems = [...cartItems];
        updatedItems[itemIndex].quantity = newQuantity;
        setCartItems(updatedItems);
        console.log('Quantity increased');
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    }
  };

  const handleDecreaseQuantity = async (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1 && cartItems[itemIndex].quantity > 1) {
      const newQuantity = Number(cartItems[itemIndex].quantity) - 1;

      try {
        await updateItemQuantity(itemId, newQuantity);
        const updatedItems = [...cartItems];
        updatedItems[itemIndex].quantity = newQuantity;
        setCartItems(updatedItems);
        console.log('Quantity decreased');
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    }
  };

  // const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  let totalPrice = 0;

for (let i = 0; i < cartItems.length; i++) {
  const item = cartItems[i];
  totalPrice += item.price * item.quantity;
}


  if (isEmpty) {
    return <h2 className="text-center vh-100" style={{marginTop:"300px"}}>Your cart is empty.</h2>;
  }

  //payment

  let paymentHandler="";

  //When testing interactively, use a card number, such as 4242 4242 4242 4242.
  //Enter the card number in the Dashboard or in any payment form.
  //se a valid future date, such as 12/34.
  //Use any three-digit CVC (four digits for American Express cards).
  //function makePayment(amount) {
  function makePayment() {
    invokeStripe();
  paymentHandler = window.StripeCheckout.configure({
      key: "pk_test_51Kb7TuSGj6LZeNumr4WWZQlyT0VAdXUwQ0zPIJAmGbnt9MAwXkJ5aIfQOZsCPraDu1L2BxAyRb8jLSF5tB6fL8mO00Yw0HiRYf",
      locale: "auto",
      token: function (stripeToken) {
        console.log(stripeToken);
        //alert('Stripe token generated!');
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "success",
          title: "Order Placed Successfully",
        });
      },
    });
    paymentHandler.open({
      name: "Course",
      description: "Order Details",
      //amount: amount,
    });
  }

  function invokeStripe() {
    if (!window.document.getElementById("stripe-script")) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onClick = () => {
     paymentHandler = window.StripeCheckout.configure({
          key: "pk_test_51NQTquSFuHuOMIa3hLt9UWTnXXozBde8dp3kDKCfUmFoVuvSIKnYP4eJ34zggZHIdJzpKJENzi9ZZNbYvqVVGCLc009RO8ppgN",
          locale: "auto",
          token: function (stripeToken) {
            console.log(stripeToken);
            const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              icon: "error",
              title: "Error in generating Stripe Payment Gateway",
            });
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }


  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-black">Your bag total is ₹{totalPrice}</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <hr />
          <div className="row align-items-center">
            <div className="col-md-2">
              <img src={item.image} alt={item.title} style={{ width: '380px' }} />
            </div>
            <div className="col-md-4 ms-5">
              <h5 id="title">{item.title}</h5>
              <p style={{marginLeft:"200px",color:"black"}}>Size:{item.size}</p>
              <p className="remove-text" onClick={() => handleRemoveItem(item.id)}>
                Remove
              </p>
            </div>
            <div className="col-md-3 me-5">
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => handleDecreaseQuantity(item.id)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="btn btn-sm btn-secondary ms-2"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
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
      <div className="row">
        <h6 className="text-center">Sub Total:</h6>
        <h6 className="text-end mt-n4">₹{totalPrice}</h6>
      </div>
      <div className="row">
        <h3 className="text-center text-black">Total:</h3>
        <h3 className="text-end mt-n4 text-black">₹{totalPrice}</h3>
      </div>
      <div className="row d-flex justify-content-end">
        <div style={{ marginRight: '-950px', marginTop: '30px' }}>
          <button className="bg-white " id="cartbtn">
            Continue shopping
          </button>
        </div>
        <div className="text-end mt-n4 pt-n5">
          <button className="bg-white" onClick={ makePayment}>Place order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
