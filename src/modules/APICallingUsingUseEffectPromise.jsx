import { useEffect, useState } from "react";

const APICallingUsingUseEffectPromise = () => {
    let [storeAPIData, setstoreAPIData] = useState();

    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
         .then(res => res.json())
         .then(json => setstoreAPIData(json)
         );
     }, [])


    return (
        <div>
            <h2>Showing Data by API Calling Promise!</h2>
            <p>{JSON.stringify(storeAPIData)}</p>
        </div>
    );
};

export default APICallingUsingUseEffectPromise;