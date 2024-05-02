import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
      updateTotalPrice(storedCart);
    }
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateTotalPrice(updatedCart);
  };

  const updateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
    setTotalPrice(total);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateTotalPrice(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateTotalPrice(updatedCart);
  };

  const placeOrder = () => {
    if (cart.length > 0) {
      const confirmation = window.confirm("Your order is placed!");
      if (confirmation) {
        setCart([]);
        setTotalPrice(0);
        localStorage.removeItem('cart');
      }
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <div className="cart-container">
      <Nav links={Nav} />
      <div className="cart-menu">
        <h1 className="cart-header">Cart Menu</h1>
        <div className="cart-table">
          <div className="cart-table-row header">
            <div className="cart-table-cell">Name</div>
            <div className="cart-table-cell">Price</div>
            <div className="cart-table-cell">Quantity</div>
            <div className="cart-table-cell">Total</div>
            <div className="cart-table-cell">Actions</div>
          </div>
          {cart.map((item) => (
            <div className="cart-table-row" key={item.id}>
              <div className="cart-table-cell">{item.name}</div>
              <div className="cart-table-cell">${item.price}</div>
              <div className="cart-table-cell">
                <button className="quantity-button" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className="quantity-button" onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <div className="cart-table-cell">${(parseFloat(item.price) * item.quantity).toFixed(2)}</div>
              <div className="cart-table-cell">
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Cart;
