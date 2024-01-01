import Anchor from '../components/Anchor.jsx';
import Hero from '../components/Hero.jsx';
import About from './About.jsx';
import Testimonials from './Testimonials.jsx';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Anchor id='about' />
      <About />
      <Anchor id='testimonials' />
      <Testimonials />
    </>
  );
}
