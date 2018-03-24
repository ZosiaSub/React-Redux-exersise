
import {ADD_TODO} from "../actions/types";

const initialState = {
    todos: []
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_TODO):
            const newState = Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text
                    }
                ]
            });
            console.log("State after reducer use: ", newState);
            return newState;

          default:
            return state; //reducer zawsze musi zwracać stan!!!
    }
}