import React from "react";
import { useRef, useEffect, useState } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    });

    return (
        <div>
            <h1>Timer : {count} seconds</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>
                stop timer
            </button>
        </div>
    );

    // 3:53:00
};

export default Timer;
