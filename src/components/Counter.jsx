import React from "react";
import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../reducers/counterReducer";
const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleIncrement = () => dispatch({ type: "increment" });

    const handleDecrement = () => dispatch({ type: "decrement" });
    const handleIncrementByAmount = () => {
        dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
        setInputValue(0);
    };

    const handleDecrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
        setInputValue(0);
    };

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>

            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={handleIncrementByAmount}>
                increment by amount
            </button>
            <button onClick={handleDecrementByAmount}>
                decrement by amount
            </button>
        </div>
    );
};

export default Counter;
