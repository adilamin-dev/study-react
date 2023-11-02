const LoopInJSX = () => {
    let item = ['A', 'B', 'C', 'D'];
    return (
        <div>
            <ul>
                {item.map((item, i)=>{
                    return <li key={i.toString}>{item}</li>
                })}
            </ul>
        </div>
    );
};

export default LoopInJSX;