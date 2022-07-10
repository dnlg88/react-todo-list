import React, {useState} from "react";
import Lista from "./Lista.jsx"
import {v4 as uuidv4} from 'uuid'

//create your first component
const Home = () => {
	
	const [toDoList, setToDoList] = useState([])
	const [inputValue, setInputValue] = useState()

	const addToDo = (input) => {
		const newToDo = {};
		newToDo.text = input
		newToDo.id = uuidv4()
		newToDo.completed = false;
		setToDoList([...toDoList, newToDo])
	}

	const deleteTask = (id) => {
		setToDoList(toDoList.filter((el)=> el.id !== id))
	}

	return (
		<div className="main">
			<h1>todos</h1>
			<div className="container">
				<div className="tarjeta">
					<input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="What needs to be done?" 
					onKeyDown={(e)=>{
						if(e.key === 'Enter'){
							addToDo(e.target.value)
							setInputValue("")
						}}
					}  />
					<Lista arr={toDoList} deleteTask={deleteTask}/>
					<p>{toDoList.length} items left</p>
				</div>
			</div>
		</div>
	)
};

export default Home;