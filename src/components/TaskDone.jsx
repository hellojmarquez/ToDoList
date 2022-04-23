import React, { useState } from 'react';

const TaskDone = ({ el,taskDone, setTaskDone, itemId }) => {
	
	const handleDel = () => {
		// console.log(el[0].id)
		// console.log(el[0].id)
		let isfDelete = window.confirm(
			`¿Deseas eliminar ta tarea con ID ${el[0].id}?`
		);
		if (isfDelete) {
			let newdDd = taskDone.filter(ele => ele[0].id !== el[0].id);
			setTaskDone(newdDd)
			// console.log(newdDd)
			// console.log(el[0].id)
		}
	};
	return (
		<>
			{/* <input type="checkbox"/> */}
			<label>{el[0].nam}</label>
			<input type="button" value="borrar" onClick={handleDel}/>
			<br></br>
		</>
	);
};

export default TaskDone;
