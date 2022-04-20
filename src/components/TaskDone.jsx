import React from 'react';

const TaskDone = () => {
	return (
		<>
			<h2>Tareas Completadas</h2>
			<form id="taskDoneForm">
				<input type="checkbox" />
				<label>tarea</label>
			</form>
		</>
	);
};

export default TaskDone;
