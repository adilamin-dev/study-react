import { useEffect, useState } from "react";

const APICallingUsingUseEffectAsysincAwait = () => {
    let [myAPIData, setMyAPIData] = useState();

    useEffect(()=>{
       (async ()=>{

        let myAPIResponse = await fetch('https://dummyjson.com/products/1');
        let myJson = await myAPIResponse.json();
        setMyAPIData(myJson);
       })()
    }, []);

    return (
        <div>
            <h2>Showing Data by API Calling Async Await!</h2>
            <p>{JSON.stringify(myAPIData)}</p>
        </div>
    );
};

export default APICallingUsingUseEffectAsysincAwait;