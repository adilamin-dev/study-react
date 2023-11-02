const ImmediatlyInvokedFunction = () => {
    let examNumber = 33;
    return (
        <div>
            {(()=>{
                if(examNumber >= 33 && examNumber <= 100){
                    return <h2>Exam passed.</h2>
                }else{
                    return <h2>Exam Failed.</h2>
                }
            })()}
        </div>
    );
};

export default ImmediatlyInvokedFunction;