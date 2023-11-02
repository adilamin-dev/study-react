import { useRef, useState } from "react";

const preventToDO = (e)=>{
    e.preventDefault();
}

const ToDoUsingUseState = () => {
    let inpData = useRef();
    let [list, setList] = useState([]);
    let [item, setItem] = useState(null);

    let addFunc = ()=>{
        if(inpData.current.value !== null && item !== null){
            list.push(item);
            setList([...list]);
            let temp = inpData.current.value = null;
            setItem(temp);
        }else{
            alert("Insert Item to Add!");
        }
        
    }

    let removeItem = (i)=>{
        list.splice(i, 1);
        setList([...list]);
    }
    return (
        <div onSubmit={preventToDO}>
            <h2>TO-DO List</h2>
            <p>{item}</p>
            <ol>
                {list.map((lItem, i)=>{
                    return <li key={i.toString}>{lItem} <button onClick={()=>{removeItem(i)}}>Remove</button></li>
                })}
            </ol>
            <form action="">
                <input ref={inpData} onChange={(e)=>setItem(e.target.value)} type="text" name="" id="" placeholder="Type item Name"/>
                <button type="submit" onClick={addFunc}>Add</button>
            </form>
        </div>
    );
};

export default ToDoUsingUseState;