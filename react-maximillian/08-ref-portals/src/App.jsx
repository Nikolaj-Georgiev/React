import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <TimerChallenge
          title='Easy'
          targetTimer={1}
        />
        <TimerChallenge
          title='Not easy'
          targetTimer={5}
        />
        <TimerChallenge
          title='Getting tough'
          targetTimer={10}
        />
        <TimerChallenge
          title='Pros only'
          targetTimer={15}
        />
      </div>
    </>
  );
}

export default App;
