import React from 'react'

import AddTodo from '../containers/addTodoContainer'
import TodoList from '../containers/todoListContainer'
import Counter from '../containers/counterContainer'
 
const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Counter />
  </div>
)
 
export default App