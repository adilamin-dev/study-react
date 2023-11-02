
const ShortHandCondition = () => {
    let marks = 90;
    let practiceReact = true;
    return (
        <div>
            <h1>Marks: {marks >= 80 ? "Brilliant Result." : "Avareg Result."}</h1>
            {practiceReact && <h2>Lrarning React</h2>}
        </div>
    );
};

export default ShortHandCondition;