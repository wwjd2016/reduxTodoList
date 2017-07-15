import React from 'react';
import AddTodo from './AddTodo';

import TodoList from './TodoList';
import FilterTodos from './FilterTodos';

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <FilterTodos />
    </div>
  )
}
export default App;
