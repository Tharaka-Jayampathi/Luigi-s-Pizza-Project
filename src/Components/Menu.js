<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
=======
>>>>>>> e25e766ae0f1a61cbba4ae478cc7652bfe239b03
import devilledPizzaImg from '../devilled_pizza.png';
import naiMirisPizzaImg from '../nai_miris_pizza.png';
import tandooriPizzaImg from '../tandoori_pizza.png';
import seafoodPizzaImg from '../seafood_pizza.png';
import colaDrinkImg from '../cola_drink.png';
import lemonLimeDrinkImg from '../lemon_lime_drink.png';
import orangeSodaImg from '../orange_soda.png';

const menuItems = [
  {
    id: 1,
    name: 'Devilled Chicken / Seafood',
    description: 'Vibrant red devilled sauce, chunks of spicy chicken or seafood, chunky onions and banana peppers.',
    price: 'Rs. 1600.00',
    image: devilledPizzaImg,
  },
  {
    id: 2,
    name: 'Nai Miris & Kotchchi Chicken',
    description: 'Dark roasted diced chicken, bright green and red fiery Nai Miris and Kotchchi chilies.',
    price: 'Rs. 1500.00',
    image: naiMirisPizzaImg,
  },
  {
    id: 3,
    name: 'Tandoori & Butter Chicken Masala',
    description: 'Creamy makhani sauce base, charred tandoori chicken chunks, fresh cilantro, and red onions.',
    price: 'Rs. 1700.00',
    image: tandooriPizzaImg,
  },
  {
    id: 4,
    name: 'Spicy Seafood Sensation',
    description: 'Fresh calamari rings, plump prawns, mussels, spicy tomato-garlic herb sauce and chili flakes.',
    price: 'Rs. 1900.00',
    image: seafoodPizzaImg,
  },
];

const drinkItems = [
  {
    id: 5,
    name: 'Classic Cola',
    description: 'Ice-cold cola served with ice cubes and a lemon slice.',
    price: 'Rs. 300.00',
    image: colaDrinkImg,
  },
  {
    id: 6,
    name: 'Lemon Lime Soda',
    description: 'Refreshing clear green-tinged lemon-lime soda with a fresh lime wheel.',
    price: 'Rs. 300.00',
    image: lemonLimeDrinkImg,
  },
  {
    id: 7,
    name: 'Orange Soda',
    description: 'Vibrant orange soda with fizzy bubbles and a fresh orange slice.',
    price: 'Rs. 300.00',
    image: orangeSodaImg,
  },
];

<<<<<<< HEAD
export default function Menu({ addToCart, cartTotal }) {
  return (
    <div id="menu" className="menu-section">
      <div className="total-amount-container">
        <h3>Cart Total</h3>
        <p className="total-price">Rs. {cartTotal.toFixed(2)}</p>
        <Link to="/cart">
          <button className="reset-btn">Go to Cart</button>
        </Link>
      </div>

      <h2>Our Pizzas</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="card clickable-card" onClick={() => addToCart(item)}>
=======
export default function Menu() {
  return (
    <div id="menu" className="menu-section">
      <h2>Our Pizzas</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="card">
>>>>>>> e25e766ae0f1a61cbba4ae478cc7652bfe239b03
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '4rem' }}>Soft Drinks</h2>
      <div className="menu-items">
        {drinkItems.map((item) => (
<<<<<<< HEAD
          <div key={item.id} className="card clickable-card" onClick={() => addToCart(item)}>
=======
          <div key={item.id} className="card">
>>>>>>> e25e766ae0f1a61cbba4ae478cc7652bfe239b03
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}