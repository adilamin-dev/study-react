const RespondingToEvents = () => {
    const handleClick = ()=>{
        alert("You are handled a alert event by click button!");
    }
    return (
        <div>
            <button onClick={handleClick}>Response Events</button>
        </div>
    );
};

export default RespondingToEvents;