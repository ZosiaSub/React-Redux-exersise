import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/types';

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case(DECREASE_COUNTER):
            const newState = state - action.modifyValue;
            console.log(newState);
            return  newState >= 0 ? newState : 0;

        case(INCREASE_COUNTER):
            return state + action.modifyValue;
        default:
            return state;
    }
}

export default counterReducer;