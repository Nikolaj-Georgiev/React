import React from 'react';
import Todo from '../models/todo';

// const TodoItem: React.FC<{ text: string }> = (props) => {
// return <li>{props.text}</li>;
const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  return <li>{props.todo.text}</li>;
};

export default TodoItem;
