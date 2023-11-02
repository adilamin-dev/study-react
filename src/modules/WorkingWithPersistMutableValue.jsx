// import React from 'react';

import { useRef } from "react";

const WorkingWithPersistMutableValue = () => {

    let APIData = useRef();
    let APIShow = useRef();

    let fetchData = async ()=>{
        let response = await fetch("https://dummyjson.com/products/");
        APIData.current = await response.json();
    }

    let showData = ()=>{
        APIShow.current.innerText= JSON.stringify(APIData.current);
    }

    return (
        <div>
            <h2>Call API & Show data</h2>
            <p>Working With Persist Mutable Value.</p>
            <p ref={APIShow}></p>
            <button onClick={fetchData}>Call API</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default WorkingWithPersistMutableValue;