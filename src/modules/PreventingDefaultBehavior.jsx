const PreventingDefaultBehavior = () => {

    const preventForm = (event)=>{
        event.preventDefault();
        alert("Form Submited!");
    }

    return (
        <div onSubmit={preventForm}>
            <form action="">
                <input type="text" name="" id="" placeholder="Name"/>
                <button type="submit">Submit Info</button>
            </form>
        </div>
    );
};

export default PreventingDefaultBehavior;