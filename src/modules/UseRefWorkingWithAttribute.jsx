import {useRef} from 'react';

const UseRefWorkingWithAttribute = () => {

    const myImg = useRef()

    let changFunc = ()=>{
        myImg.current.src="https://placehold.co/600x400?text=Hello+World";
        myImg.current.setAttribute('height', '300px');
        myImg.current.setAttribute('width', '300px');
    }

    return (
        <div>
            <img ref={myImg} src="https://placehold.co/600x400" alt="" />
            <button onClick={changFunc}>Change Image</button>
        </div>
    );
};

export default UseRefWorkingWithAttribute;