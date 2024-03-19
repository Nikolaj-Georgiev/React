export default function Log({ turns }) {
  return (
    <ol id='log'>
      {turns.map((turn) => (
        <li key={`${turn.square.row} ${turn.square.col}`}>
          {turn.player} selected position{' '}
          {`${turn.square.row + 1}, ${turn.square.col + 1}`}
        </li>
      ))}
    </ol>
  );
}
