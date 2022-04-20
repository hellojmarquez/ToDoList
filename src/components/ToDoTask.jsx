import React, { useEffect } from 'react';

const ToDoTask = ({
	el,
	setItemId,
	taskDone,
	setTaskDone,
	tasks,
	setTasks,
}) => {
	const { id, nam } = el;
	const handlecheck = () => {
		setItemId(id);
	};
	const handleComplete = () => {
		// let taskId = e.target.previousSibling.previousSibling.value;
		let completedTask = tasks.filter(ele => ele.id === el.id);
		let completedTaskDone = tasks.filter(ele => ele.id !== el.id);
		if(completedTask){
			setTasks(completedTaskDone)
			// console.log(completedTask)

			setTaskDone(taskDone=>[...taskDone, completedTask]);
			
		}
		// console.log(completedTask)
		// setTasks(completedTask);
		// console.log(completedTask)
	};
	useEffect(() => {
		localStorage.setItem('tareasCompletadas', JSON.stringify(taskDone));
		// localStorage.setItem('tareas', JSON.stringify(tasks));
		console.log(taskDone);
	}, [taskDone]);
	return (
		<>
			<input
				type="checkbox"
				name="tarea"
				id="box"
				value={id}
				onChange={handlecheck}
			/>
			<label>{nam}</label>
			<input type="button" value="completar" onClick={handleComplete} />
			<br></br>
		</>
	);
};

export default ToDoTask;
