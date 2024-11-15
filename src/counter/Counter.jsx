import {useState} from "react";
import React from "react";

const Counter = ({initialCounter}) => {
    const [count, setCount] = useState(initialCounter)
    const increment = () => {
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        setCount(prev => prev - 1)
    }
    const reset = () => {
        setCount(prev => initialCounter)
    }
    const switchSigns = () => {
        setCount(prev => prev * -1)
    }
    return (
        <div>
            <h2>Count:</h2>
            <h3 data-testid='counterValue'>{count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={switchSigns}>Switch Signs</button>
        </div>
    );
};
export default Counter;
