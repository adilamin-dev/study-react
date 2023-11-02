import { useState } from "react";

const FormUsingUseState = () => {

    let [formObj, setFormObj] = useState({
        fName: '',
        lName: '',
        city: 'Choose City',
        gender: ''
    })

    let onChangeHandler = (property, value)=>{
        setFormObj((prevObj)=>({
            ...prevObj,
            [property]: value //property inside squire braket for dynamic.
        }))
    }

    let submitForm = (e)=>{
        e.preventDefault();
        console.log(formObj);
    }
 
    return (
        <div className="container">
            <h2>Form Using useState</h2>
            <form action="">
                <input onChange={(e)=>{onChangeHandler('fName', e.target.value)}} value={formObj.fName} type="text" placeholder="First Name"/>

                <input onChange={(e)=>{onChangeHandler('lName', e.target.value)}} value={formObj.formObj} type="text" placeholder="Last Name"/>

                <select onChange={(e)=>{onChangeHandler('city', e.target.value)}} value={formObj.city}>
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                </select>
                <br />

                <input onChange={()=>{onChangeHandler('gender', 'Male')}} checked={formObj.gender==="Male"} type="radio" name="gender"/>Male

                <input onChange={()=>{onChangeHandler('gender', 'Female')}} checked={formObj.gender==="Female"} type="radio" name="gender"/>Female
                <br />
                <button onClick={submitForm} type="submit">Submit Form</button>
            </form>
        </div>
    );
};

export default FormUsingUseState;