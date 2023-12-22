import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MainNav from './components/MainNav';

function App() {
  return (
    <>
      <Header>
        <MainNav />
      </Header>
      <Hero />
    </>
  );
}

export default App;
