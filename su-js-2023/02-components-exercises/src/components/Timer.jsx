import React, { useState, useEffect } from 'react';

export default function Timer(props) {
  const date = props.time;

  // Initialize state variables for hours, minutes, and seconds
  let [hours, setHours] = useState(date.getHours());
  let [mins, setMins] = useState(date.getMinutes());
  let [secs, setSecs] = useState(date.getSeconds());

  // Initialize the time state variable with the initial values
  const [time, setTime] = useState(`${hours}:${mins}:${secs}`);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the seconds and check for minute and hour changes
      setSecs((prevSecs) => {
        if (prevSecs === 59) {
          setMins((prevMins) => {
            if (prevMins === 59) {
              setHours((prevHours) => prevHours + 1);
              return 0;
            }
            return prevMins + 1;
          });
          return 0;
        }
        return prevSecs + 1;
      });

      hours = `${hours}`.padStart(2, 0);
      mins = `${mins}`.padStart(2, 0);
      secs = `${secs}`.padStart(2, 0);

      // Update the time state with the new values
      setTime(`${hours}:${mins}:${secs}`);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [hours, mins, secs]);

  return (
    <div>
      <p className='counter'>{time}</p>
    </div>
  );
}
