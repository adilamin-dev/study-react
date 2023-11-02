import {useRef} from 'react';

const UseRefInReact = () => {
    let myHeading = useRef();
    let showHeading = ()=>{
        myHeading.current.innerText="Precticing useRef";
    }

    // let showHeading = ()=>{
    //     myHeading.innerText="Precticing useRef";
    // }

    return (
        <div>
            <h2 ref={myHeading}></h2>
            {/* <h2 ref={(h2)=>myHeading=h2}></h2> */}
            <button onClick={showHeading}>Show Heading</button>
        </div>
    );
};

export default UseRefInReact;