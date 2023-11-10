// import { Fragment } from 'react'; // for older projects
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    // <Fragment> // for older projects that don't support <> syntax
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
    // </Fragment>
  );
}

export default App;
