import React from 'react';
import { useRef } from 'react';

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredText = todoTextInputRef.current?.value;
    const enteredText = todoTextInputRef.current!.value; // use this annotation if you are 100% sure that it will not be undefined. And now the inferred type is just string, not string | undefined.
  };

  return (
    <form onSubmit={submitHandler}>
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
