import { useEffect } from "react";

const WorkingWithUseEffect = () => {
    useEffect(()=>{
        console.log('Hello');
    }, [9]);
    return (
        <div>
            
        </div>
    );
};

export default WorkingWithUseEffect;