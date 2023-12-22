import { Link } from 'react-router-dom';
import Li from '../UI/Li';
import classes from './MainNav.module.css';

export default function MainNav() {
  const linkCssClass = `${classes['main-nav-link']} ${classes['nav-base']}`;
  const buttonsCssClass = `${classes['main-nav-link']} ${classes['nav-cta']}`;
  return (
    <nav className={classes['main-nav']}>
      <ul className={classes['main-nav-list']}>
        <Li>
          <Link
            className={linkCssClass}
            to='about'
          >
            About
          </Link>
        </Li>

        <Li>
          <Link
            className={linkCssClass}
            to='testimonials'
          >
            Testimonials
          </Link>
        </Li>

        <Li>
          <Link
            className={buttonsCssClass}
            to='login'
          >
            Login
          </Link>
        </Li>

        <Li>
          <Link
            className={buttonsCssClass}
            to='register'
          >
            Register
          </Link>
        </Li>
      </ul>
    </nav>
  );
}
