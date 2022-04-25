import React, { useEffect } from 'react';

const List = ({ tasks, setTasks, itemId, handleDelete, handleEdit }) => {
	const handleSubmit = e => {
		e.preventDefault();
		let textValue = e.target.taskText.value;
		if (textValue === '') {
			window.alert('mensaje vacio');
			return;
		} else {
			let trimText = textValue.trim();
			let capitaltext = trimText.charAt(0).toUpperCase() + trimText.slice(1);
			let findData = tasks.find(el => el.id === itemId);
			if (findData) {
				//funcion editar
				let data = {
					id: findData.id,
					nam: capitaltext,
				};
				let editedTask = tasks.map(u => (u.id !== data.id ? u : data));
				setTasks(editedTask);
			} else {
				//funciuon agregar
				const data = {
					id: Date.now(),
					nam: capitaltext,
				};
				setTasks(tasks => [...tasks, data]);
			}

			location.reload();
		}
	};

	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<form id="taskForm" className="taskForm" onSubmit={handleSubmit}>
			<h1 className="taskForm-title">To-Do-List</h1>
			<div className="taskForm-insertTask">
				<label htmlFor="taskText" className="taskForm-text">
					Agregar tarea
				</label>
				<input
					type="text"
					name="taskText"
					id="taskText"
					placeholder="Insertar tarea"
				/>
				<input type="submit" name="" id="" value="Enviar" />
			</div>
			<input type="button" value="borrar" onClick={handleDelete} className="taskForm-btn" />
			<input type="button" value="editar" onClick={handleEdit} className="taskForm-btn"/>
		</form>
	);
};

export default List;
