// import { useState } from 'react';

// import './App.css';
// import NewTodo from './components/NewTodo';
// import Todos from './components/Todos';
// import Todo from './models/todo';

// function App() {
//   // const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const removeTodoHandler = (todoId: string) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter((todo) => todo.id !== todoId);
//     });
//   };

//   const addTodoHandler = (todoText: string) => {
//     const newTodo = new Todo(todoText);
//     setTodos((prevTodos) => {
//       // return prevTodos.concat(newTodo);
//       return [...prevTodos, newTodo];
//     });
//   };

//   return (
//     <div>
//       <NewTodo onAddTodo={addTodoHandler} />
//       <Todos
//         items={todos}
//         onRemoveTodo={removeTodoHandler}
//       />
//     </div>
//   );
// }

// export default App;
