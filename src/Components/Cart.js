import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems, removeFromCart, cartTotal }) {
    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <div className="empty-cart-message">
                    <p>Your cart is currently empty.</p>
                    <Link to="/menu">
                        <button className="back-to-menu-btn">Browse Menu</button>
                    </Link>
                </div>
            ) : (
                <div className="cart-content-wrapper">
                    <div className="cart-items-list">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-list-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p className="cart-item-price">{item.price}</p>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Items ({cartItems.length}):</span>
                            <span>Rs. {cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total:</span>
                            <span>Rs. {cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
}
