import mainImg from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id='header'>
      <img
        src={mainImg}
        alt='Image of a bag with a dollar sign surrounded with piles of gold coins'
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
