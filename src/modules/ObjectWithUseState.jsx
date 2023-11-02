import { useState } from "react";

const ObjectWithUseState = () => {

    let [myObj, setMyObj] = useState({
        key1: "Value 1",
        key2: "Value 2",
        key3: "Value 3",
        key4: "Value 4"
    });

    let changeObj = ()=>{
        setMyObj((prevObj)=>({
            ...prevObj, 
            key1: "New value 1", 
            key2: "New Value 2"
        }))
    }
    return (
        <div>
            <ul>
                <li>{myObj.key1}</li>
                <li>{myObj.key2}</li>
                <li>{myObj.key3}</li>
                <li>{myObj.key4}</li>
            </ul>
            <button onClick={changeObj}>Click to Change Obj using useState</button>
        </div>
    );
};

export default ObjectWithUseState;