import {ADD_TODO} from "./types";

 export const addTodo = (text) => {
    const addTodoAction = {
        type: ADD_TODO,
        text //text: text
    };
    console.log("Wykonujemy akcję", addTodoAction);
    return addTodoAction;
}