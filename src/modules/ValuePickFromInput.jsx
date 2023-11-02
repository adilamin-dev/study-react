import { useRef } from "react";

const ValuePickFromInput = () => {
    // let firstName = useRef();
    // let eMail = useRef();


    let firstName,eMail = useRef();

    const pickValue = ()=>{
    //    let fName = firstName.current.value;
    //    let eM = eMail.current.value;

       let fName = firstName.value;
       let eM = eMail.value;

       alert(`First name is: ${fName} <br /> E-Mail is: ${eM}`);
    }

    return (
        <div>
            {/* <input ref={firstName} type="text" />
            <input ref={eMail} type="email" name="" id="" /> */}

            <input ref={(f)=>firstName=f} type="text" />
            <input ref={(e)=>eMail=e} type="email" name="" id="" />

            <button onClick={pickValue}>Click to pick value!</button>
        </div>
    );
};

export default ValuePickFromInput;