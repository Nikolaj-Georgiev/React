import React, { useContext } from 'react';

import Login from './components/Login/Login.js';
import Home from './components/Home/Home.js';
import MainHeader from './components/MainHeader/MainHeader.js';
import AuthContext from './store/auth-context.js';

function App() {

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
