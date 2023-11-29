import { useState } from 'react';

import QUESTIONS from '../questions.js';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(answer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, answer];
    });
  }

  return (
    <div id='quiz'>
      <div id='questions'>
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id='answers'>
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li
              key={answer}
              className='answer'
            >
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
