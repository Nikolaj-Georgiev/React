import { useState } from 'react';
import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

export default function StateLogin() {
  const [enteredInputValues, setEnteredInputValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredInputValues.email) &&
    !isNotEmpty(enteredInputValues.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredInputValues.password, 6);
  function handleSubmit(e) {
    //<-- we receive the event automatically
    e.preventDefault();
    console.log('Submitted!');
    console.log(`User email ${enteredInputValues.email}`);
    console.log(`User password ${enteredInputValues.password}`);

    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }

    console.log('sending HTTP request...');

    // Reset the form when managing the values via state:
    setEnteredInputValues({
      email: '',
      password: '',
    });
  }

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
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onBlur={() => handleInputBlur('email')}
          onChange={(e) => handleInputChange('email', e.target.value)}
          value={enteredInputValues.email}
          error={emailIsInvalid && 'Please enter a valid email.'}
        />

        <Input
          label='password'
          id='password'
          type='password'
          name='password'
          onBlur={() => handleInputBlur('password')}
          onChange={(e) => handleInputChange('password', e.target.value)}
          value={enteredInputValues.password}
          error={
            passwordIsInvalid && 'Please enter at least 6 characters password.'
          }
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
