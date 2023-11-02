const PassingObjectWithProps = (props) => {
    return (
        <div>
            <h2>Passing Object with props.</h2>
            <ul>
                <li>Name: {props.userInfo['userName']}</li>
                <li>Age: {props.userInfo['age']}</li>
                <li>City: {props.userInfo['city']}</li>
            </ul>
        </div>
    );
};

export default PassingObjectWithProps;