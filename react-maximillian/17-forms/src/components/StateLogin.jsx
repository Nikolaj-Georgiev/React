import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from '../hooks/useInput.js';

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value)); // passing a fn that executes multiple functions!!!
  // useInput('', isEmail); for passing just one validation function

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    // Трябва да си дооправиш логиката, защото ако не си пипнал нищо можеш да пуснеш праен логин
    console.log('Submitted!');
    console.log('sending HTTP request...');
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email.'}
        />

        <Input
          label='password'
          id='password'
          type='password'
          name='password'
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={
            passwordHasError && 'Please enter at least 6 characters password.'
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
