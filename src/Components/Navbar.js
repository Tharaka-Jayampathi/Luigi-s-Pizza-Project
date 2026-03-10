import { Link } from 'react-router-dom';

<<<<<<< HEAD
export default function Navbar({ cartCount = 0 }) {
=======
export default function Navbar() {
>>>>>>> e25e766ae0f1a61cbba4ae478cc7652bfe239b03
  return (
    <nav className="navbar">
      <h2>Luigi's Pizza</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
<<<<<<< HEAD
        <Link to="/cart">Cart ({cartCount})</Link>
=======
>>>>>>> e25e766ae0f1a61cbba4ae478cc7652bfe239b03
      </div>
    </nav>
  );
}