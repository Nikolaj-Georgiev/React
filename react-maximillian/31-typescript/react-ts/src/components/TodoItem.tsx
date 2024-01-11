import React from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

// const TodoItem: React.FC<{ text: string }> = (props) => {
// return <li>{props.text}</li>;
const TodoItem: React.FC<{
  todo: Todo;
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li
      className={classes.item}
      onClick={props.onRemoveTodo}
    >
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
