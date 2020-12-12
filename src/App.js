import React from 'react';
import ToDo from './ToDo/TodoList';
import Context from './context';

const App = () => {

  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Check messagers'},
    { id: 2, completed: false, title: 'Go shopping'},
    { id: 3, completed: false, title: 'Read some books'},
    { id: 4, completed: false, title: 'Learn React js'}
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map(element => {
        if (element.id === id) {
          element.completed = !element.completed
        }
        return element
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return ( <div className='wrapper'>
    <Context.Provider value={ { removeTodo } }>
      <h1>
        react-todo tutorial 
      </h1>
      {todos.length 
        ? 
        <ToDo todos={todos} onToggle={toggleTodo} /> 
        : 
        <p>No todos!</p>
      }
    </Context.Provider>
  </div> );
};

export default App;
