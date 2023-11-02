import { useRef } from "react";

const WorkingWithCSSUsingUseRef = () => {
    let h2 = useRef();

    const changeCSS = ()=>{
        h2.current.classList.remove('text-danger');
        h2.current.classList.add('text-success');
    }

    return (
        <div>
            <h2 ref={h2} className="text-danger">Working with css.</h2>
            <button onClick={changeCSS}>Change CSS of H2</button>
        </div>
    );
};

export default WorkingWithCSSUsingUseRef;