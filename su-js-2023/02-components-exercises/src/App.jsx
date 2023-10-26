import peopleForTest from './assets/peopleForTest';
import './App.css';
import PersonLi from './components/PersonLi';
import ButtonCounter from './components/ButtonCounter';
import Timer from './components/Timer';

function App() {
  return (
    <div>
      <h1>First play with components in this course</h1>
      <div>
        <h2>Time</h2>
        <Timer time={new Date()} />
      </div>
      <h2>List of people for the test</h2>
      <div className='container'>
        <ul className='listContainer'>
          <PersonLi people={peopleForTest[0]} />
          <PersonLi people={peopleForTest[1]} />
          <PersonLi people={peopleForTest[2]} />
          <PersonLi people={peopleForTest[3]} />
        </ul>
      </div>
      <ButtonCounter />
    </div>
  );
}

export default App;
