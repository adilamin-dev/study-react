import { useState } from "react";

const CounterUsingUseState = () => {
    let[countNumber, setCountNumber] = useState(0);
    let counterFunc = ()=>{
        setCountNumber(countNumber+1);
    }
    return (
        <div>
            <h2>Change State Using Counter: {countNumber}</h2>
            <button onClick={counterFunc}>Count</button>
        </div>
    );
};

export default CounterUsingUseState;