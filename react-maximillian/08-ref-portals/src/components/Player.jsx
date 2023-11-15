import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    // playerName.current.value = ''; you can empty the field like this but it's generally not a good practice since you manipulate the DOM and have an imperative code, not declarative!!!
    playerName.current.value = '';
  }

  return (
    <section id='player'>
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type='text'
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
