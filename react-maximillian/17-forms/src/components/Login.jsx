import { useRef, useState } from 'react';

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    //<-- we receive the event automatically
    e.preventDefault();
    console.log('Submitted!');
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes('@');

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return; // preventing execution of the following code if invalid data has bean entered
    }

    setEmailIsInvalid(false);

    console.log('Sending HTTP request...');

    // Resetting the form
    // email.current.value = ''; // you can do it like this, but it is NOT recommended because you manipulate the DOM in an imperative way
    // better way is to call .reset() on the event target:
    // e.target.reset(); // also imperative code, but it is the preferred one instead manually reset all the ref values
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            ref={email}
          />
          <div className='control-error'>
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            ref={password}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
