export default function GameOver({ winner, onRestart }) {
  const name = winner?.toUpperCase() ?? null;
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{name} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
