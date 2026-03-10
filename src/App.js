<<<<<<< HEAD
import React, { useState } from 'react';
=======
>>>>>>> e25e766ae0f1a61cbba4ae478cc7652bfe239b03
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
<<<<<<< HEAD
import Cart from './Components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const cartTotal = cartItems.reduce((total, item) => {
    const priceNum = parseFloat(item.price.replace('Rs. ', '').trim());
    return total + (isNaN(priceNum) ? 0 : priceNum);
  }, 0);

  return (
    <Router>
      <div className="app-container">
        <Navbar cartCount={cartItems.length} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} cartTotal={cartTotal} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} cartTotal={cartTotal} />} />
=======

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
>>>>>>> e25e766ae0f1a61cbba4ae478cc7652bfe239b03
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;