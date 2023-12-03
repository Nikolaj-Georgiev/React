import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (newCount) => {
    setChosenCount(newCount);
    // setChosenCount(chosenCount + 1); //will not work because it will take the old state(0) and add 1 to it. It will not get the latest state update!!!
    setChosenCount((prevChosenCount) => prevChosenCount + 1); //this will work !!! and is considered a best practice
    console.log(chosenCount); // N.B. this wont work!!! At least not as expected!
  };

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter
          key={chosenCount} // this is #2 -> whenever key changes React will throw away the old component and recreate it!!! N.B.
          initialCount={chosenCount}
        />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
