const ConditionalRendering = () => {

    let status = false;

    const LoginStatusBtn = (status)=>{
        if(status){
            return <button>Logout</button>
        }else{
            return <button>Login</button>
        }
    }
    return (
        <div>
            <h1>Login Status</h1>
            {LoginStatusBtn(status)}
        </div>
    );
};

export default ConditionalRendering;