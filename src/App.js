import React from 'react';
import ToDo from './ToDo/TodoList';

const App = () => {

  const todos = [
    { id: 1, completed: false, title: 'Check messagers'},
    { id: 2, completed: false, title: 'Go shopping'},
    { id: 3, completed: false, title: 'Read some books'},
    { id: 4, completed: false, title: 'Learn React js'}

  ];

  return ( <div className='wrapper'>
    <h1>
      react-todo tutorial 
    </h1>
    <ToDo todos={todos} />
  </div> );
};

export default App;
