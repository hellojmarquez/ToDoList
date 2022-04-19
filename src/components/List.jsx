import React, { useEffect } from 'react';

const List = ({ tasks, setTasks, itemId }) => {
	const handleSubmit = e => {
		e.preventDefault();
		let findData = tasks.find(el => el.id === itemId);
		if (findData) {
			let data = {
				id: findData.id,
				nam: e.target.taskText.value,
			};
			console.log(data);
			let editedTask = tasks.map(u => (u.id !== data.id ? u : data));
			console.log(editedTask);

			setTasks(editedTask);
			console.log('editar');
		} else {
			const data = {
				id: Date.now(),
				nam: e.target.taskText.value,
			};

			setTasks(tasks => [...tasks, data]);
			// return;
			console.log('crear');
			// return;
		}

		location.reload();
	};

	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<>
			<h1>TO-DO-LIST</h1>
			<form id="taskForm" onSubmit={handleSubmit}>
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
