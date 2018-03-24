import { combineReducers } from 'redux'
import todoReducer from './todos'
import counterReducer from './counter'
 
export default combineReducers({
  todos: todoReducer, //todos: todos  export default
  counter: counterReducer
})