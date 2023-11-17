import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog
      ref={dialog}
      className='result-modal'
    >
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

// N.B. A form with method="dialog" inside of an element <dialog> with a button will close the dialog when the button is clicked without any additional JS required. This is an HTML feature. By default the <dialog> is invisible and we need to add it property 'open' in order to be visible. But if we force it like this we will not get the build in backdrop of the dialog. Instead we need to open it programmatically by sending command to the browser.
