import React from 'react'

const CounterComponent = ({ decreaseCounter, increaseCounter, counter }) => {

    return (
        <div className="counter">
            <button className="decrease-bth"
            onClick={e => {decreaseCounter()}}>
                -
            </button>
        <span className="my-counter">{counter}</span>
            <button className="increase-bth"
                onClick={e => {increaseCounter()}}>
                +
            </button>
        </div>
    )
}

export default CounterComponent;