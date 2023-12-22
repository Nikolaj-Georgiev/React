import { Link } from 'react-router-dom';
import Li from '../UI/Li';
import classes from './MainNav.module.css';

export default function MainNav() {
  const linkCssClass = classes['main-nav-link'];
  return (
    <nav className={classes['main-nav']}>
      <ul className={classes['main-nav-list']}>
        <Li>
          <Link
            className={`${linkCssClass} nav-base`}
            to='about'
          >
            About
          </Link>
        </Li>

        <Li>
          <Link
            className={`${linkCssClass} nav-base`}
            to='testimonials'
          >
            Testimonials
          </Link>
        </Li>

        <Li>
          <Link
            className={`${linkCssClass} nav-cta`}
            to='login'
          >
            Login
          </Link>
        </Li>

        <Li>
          <Link
            className={`${linkCssClass} nav-cta`}
            to='register'
          >
            Register
          </Link>
        </Li>
      </ul>
    </nav>
  );
}
