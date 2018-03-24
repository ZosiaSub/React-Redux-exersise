import {createStore} from 'redux';


import {addTodo} from "./actions/actions";
import {todoReducer} from "./reducer/reducer";
import {renderTodos} from "./view/index";

let store = createStore(todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

document.querySelector('#todoAddSubmit').addEventListener('click', () => {
  const newCheck = document.querySelector('#todoAddInput').value;
  if(newCheck) {
    store.dispatch(addTodo(newCheck)); //dispatch -podaje akcję do reducera
  }
  document.querySelector('#todoChecks').value = null;
});

const unsubscribe = store.subscribe(() => { //przekazuje callback przy każdym zmianie stanu aplikacji
  document.querySelector('#todoChecks').innerHTML = renderTodos(store.getState().todos); //store.getState zwraca nam aktualny stan
})