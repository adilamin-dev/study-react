import { useRef } from "react";

const PersistedMutableValue = () => {
    let backendValue = useRef(0);

    const changeBackValue = () => {
        backendValue.current++;
        console.log(backendValue);
    }
    
    return (
        <div>
            <button onClick={changeBackValue}>Click to value backend!</button>
        </div>
    );
};

export default PersistedMutableValue;