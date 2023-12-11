import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items?.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id='main-header'>
      <div id='title'>
        <img
          src={logoImg}
          alt='picture of a dining plate'
        />
        <h1>Yummy Food</h1>
      </div>
      <nav>
        {/* textOnly={true} => in React, just adding the textOnly automatically sets it to true */}
        <Button
          textOnly
          onClick={handleShowCart}
        >
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
