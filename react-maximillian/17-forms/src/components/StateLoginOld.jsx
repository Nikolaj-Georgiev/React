import { useState } from 'react';

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredInputValues, setEnteredInputValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const [emailIsValid, setEmailIsValid] = useState(true);

  const emailIsInvalid =
    didEdit.email && !enteredInputValues.email.includes('@');

  function handleSubmit(e) {
    //<-- we receive the event automatically
    e.preventDefault();
    console.log('Submitted!');
    console.log(`User email ${enteredInputValues.email}`);
    console.log(`User password ${enteredInputValues.password}`);

    if (emailIsInvalid) {
      setEmailIsValid(false);
      return;
    }
    console.log('sending HTTP request...');
    setEmailIsValid(true);
    // Reset the form when managing the values via state:
    setEnteredInputValues({
      email: '',
      password: '',
    });
  }

  // function handleEmailChange(e) {
  //   setEnteredEmail(e.target.value);
  // }

  // function handlePasswordChange(e) {
  //   setEnteredPassword(e.target.value);
  // }

  function handleInputChange(identifier, value) {
    setEnteredInputValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: true,
    }));
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
            onBlur={() => handleInputBlur('email')}
            // onChange={handleEmailChange}
            // value={enteredEmail}
            onChange={(e) => handleInputChange('email', e.target.value)}
            value={enteredInputValues.email}
          />
          <div className='error-control'>
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
            {!emailIsValid && <p>Please enter a valid email address.</p>}
            {/* tuk se omotah malko i ne e dobyr variant, tryabva da go opravia */}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            // onChange={handlePasswordChange}
            // value={enteredPassword}
            onChange={(e) => handleInputChange('password', e.target.value)}
            value={enteredInputValues.password}
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
