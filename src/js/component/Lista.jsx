import React from "react";
import Elemento from "./Elemento.jsx"

const Lista = ({arr, deleteTask}) => {
    return ( <ul>
        {arr.map((elemento)=>
            <Elemento key={elemento.id} data={elemento} deleteTask={deleteTask}/>
        )} 
    </ul>
    )
}
export default Lista