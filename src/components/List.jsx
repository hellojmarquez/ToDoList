import React, { useEffect } from 'react';

const List = ({ tasks, setTasks }) => {
	// console.log('tareas', tasks);

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			id: Date.now(),
			nam: e.target.taskText.value,
		};

		setTasks(tasks => [...tasks, data]);

		e.target.reset();
	};

	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<>
			<h1>TO-DO-LIST</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="taskText">Agregar tarea</label>
				<input
					type="text"
					name="taskText"
					id="taskText"
					placeholder="Insertar tarea"
				/>
				<input type="submit" name="" id="" value="Enviar" />
			</form>
		</>
	);
};

export default List;
