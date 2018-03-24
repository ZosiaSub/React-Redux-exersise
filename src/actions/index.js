import {ADD_TODO, DECRESE_COUNTER, INCREASE_COUNTER } from './types';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    };
};

const modifyValue = 1

export const decreaseCounter = (number) => {
    return {
        type: DECRESE_COUNTER,
        decreaseBy: modifyValue
    }
};

export const increaseCounter = (number) => {
    return {
        type: INCREASE_COUNTER,
        increaseBy: modifyValue
    }
}