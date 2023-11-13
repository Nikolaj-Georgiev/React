import { useState } from 'react';

export default function UserInput({ onChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type='number'
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Return</label>
          <input
            type='number'
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            required
            value={userInput.duration}
            onChange={(e) => onChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
