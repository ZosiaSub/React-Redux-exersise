import React from 'react'

const CounterComponent = ({ decreaseCounter, increaseCounter, counter }) => {

    return (
        <div>
            <button className="decrease-bth"
            onClick={ e => (
                e.preventDefault(),
                console.log('Dupa'),
                decreaseCounter(counter)
            )}>
                -
            </button>
        <span className="my-counter">{counter}</span>
            <button className="increase-bth"
                onClick={e => (
                    e.preventDefault(),
                    console.log('Shit')
                )}>
                +
            </button>
        </div>
    )
}

export default CounterComponent;