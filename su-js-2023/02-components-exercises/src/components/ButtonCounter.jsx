import { useState } from 'react';

const ButtonCounter = function () {
  let [count, setCount] = useState(0);

  const countPlus = () => {
    setCount(count + 1);
  };
  const countMinus = () => {
    setCount(count - 1);
  };
  const countReset = () => {
    setCount((count = 0));
  };

  return (
    <div>
      <p className='counter'>{count}</p>
      <button onClick={countPlus}>Plus</button>
      <button onClick={countMinus}>Minus</button>
      <button onClick={countReset}>Reset</button>
    </div>
  );
};

export default ButtonCounter;
