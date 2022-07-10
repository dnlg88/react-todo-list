import React, {useState} from "react";
import {AiOutlineClose} from 'react-icons/ai'

const Elemento = ({data, deleteTask})=> {
    const [completed, setCompleted] = useState(false)
    
    const isCompleted = ()=>{
        return(completed === false ? setCompleted(true) : setCompleted(false))
    }

    return (<li className={completed ? "completed":""} onClick={isCompleted}>
        {data.text}
        {completed === true ? <a className="trash" onClick={(e)=>deleteTask(data.id)}> <AiOutlineClose /> </a> : <></>}
        
    </li>
    )
}
export default Elemento