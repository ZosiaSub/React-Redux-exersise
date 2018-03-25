import {ADD_TODO, DECREASE_COUNTER, INCREASE_COUNTER } from './types';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    };
};

const modifyValue = 1;

export const decreaseCounter = () => {
    return {
        type: DECREASE_COUNTER,
        modifyValue
    }
};

export const increaseCounter = () => {
    return {
        type: INCREASE_COUNTER,
        modifyValue
    }
}