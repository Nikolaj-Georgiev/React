import React from 'react';
import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredText = todoTextInputRef.current?.value;
    const enteredText = todoTextInputRef.current!.value; // use this annotation if you are 100% sure that it will not be undefined. And now the inferred type is just string, not string | undefined.

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
    >
      <label htmlFor='text'>Todo text</label>
      <input
        type='text'
        id='text'
        ref={todoTextInputRef}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
