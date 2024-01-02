/* eslint-disable no-unused-vars */
import Header from '../components/Header.jsx';
import MainNav from '../components/MainNav.jsx';
import Anchor from '../components/Anchor.jsx';
import Hero from '../components/Hero.jsx';
import About from './About.jsx';
import Testimonials from './Testimonials.jsx';

import { Outlet } from 'react-router-dom';

export default function RooterLayout() {
  return (
    <>
      <Header>
        <MainNav />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
