import { useNavigate } from 'react-router-dom';
import pizzaImage from '../pizza_hero.png';

export default function Hero() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/menu');
    window.scrollTo(0, 0);
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${pizzaImage})` }}>
      <h1>The Best Slices in Town</h1>
      <p>Wood-fired, authentic, and made with love.</p>
      <button onClick={handleOrderNow}>Order Now</button>
    </div>
  );
}