const PassingFunctionWithProps = (props) => {
    return (
        <div>
            <button onClick={props.funcProps}>
                Click me!
            </button>
        </div>
    );
};

export default PassingFunctionWithProps;