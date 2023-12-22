import Header from '../components/Header.jsx';
import MainNav from '../components/MainNav.jsx';

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
