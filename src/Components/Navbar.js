import { Link } from 'react-router-dom';

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">
      <h2>Luigi's Pizza</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}