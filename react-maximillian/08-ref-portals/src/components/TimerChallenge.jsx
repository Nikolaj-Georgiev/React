import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

// let timer; // we can use it here, but it will be shared across all the instances of this component. Therefore it will not work when we start multiple timers, because it will get overwritten. Soo a variable is not the solution.

export default function TimerChallenge({ title, targetTimer }) {
  const dialog = useRef();
  const timer = useRef(); // every instance of this component will get it's own timer that will work independently from the other instances of this component. Behind the scenes React will store these values stored in ref and it will not throw them away when component re-executes, like the state value. But unlike state value setting the ref value does not make this component to execute again!!! N.B.

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  // let timer;// we cannot use it here, because every time the state changes we will get new timer variable...

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTimer * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal
        targetTime={targetTimer}
        result='lost'
        ref={dialog}
      />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTimer} second{targetTimer > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Timer is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
