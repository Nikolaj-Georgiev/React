import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className='result-modal'
      onClose={onReset}
    >
      {userLost && <h2>You lost!!!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{' '}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form
        method='dialog'
        onSubmit={onReset}
      >
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;

// N.B. A form with method="dialog" inside of an element <dialog> with a button will close the dialog when the button is clicked without any additional JS required. This is an HTML feature. By default the <dialog> is invisible and we need to add it property 'open' in order to be visible. But if we force it like this we will not get the build in backdrop of the dialog. Instead we need to open it programmatically by sending command to the browser.
