import Input from './Input.jsx';
import { useState } from 'react';

export default function UserInput() {
  const [inputState, setInputState] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInputChange(event) {
    setInputState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <section id='user-input'>
      <div className='input-group'>
        <Input
          labelInfo='INITIAL INVESTMENT'
          name='initialInvestment'
          initialValue={inputState.initialInvestment}
          onChange={handleInputChange}
        />
        <Input
          labelInfo='ANNUAL INVESTMENT'
          name='annualInvestment'
          initialValue={inputState.annualInvestment}
          onChange={handleInputChange}
        />
      </div>
      <div className='input-group'>
        <Input
          labelInfo='EXPECTED RETURN'
          name='expectedReturn'
          initialValue={inputState.expectedReturn}
          onChange={handleInputChange}
        />
        <Input
          labelInfo='DURATION'
          name='duration'
          initialValue={inputState.duration}
          onChange={handleInputChange}
        />
      </div>
    </section>
  );
}
