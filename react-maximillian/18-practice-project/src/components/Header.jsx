import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';

export default function Header() {
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
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
