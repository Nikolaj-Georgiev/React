import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? classes.active : undefined}
            // style={({ isActive }) => ({ textAlign: isActive ? 'center' : 'left' })}
            end
            to=''>Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='products'>Products</NavLink>
        </li>
      </ul>
    </nav>
  </header>
};

export default MainNavigation