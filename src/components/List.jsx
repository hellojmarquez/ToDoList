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
			let completeText=  "*"+capitaltext
			let findData = tasks.find(el => el.id === itemId);
			if (findData) {
				//funcion editar
				let data = {
					id: findData.id,
					nam: completeText,
				};
				let editedTask = tasks.map(u => (u.id !== data.id ? u : data));
				setTasks(editedTask);
			} else {
				//funciuon agregar
				const data = {
					id: Date.now(),
					nam: completeText,
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
		<>
			<h1 className='title'>To-Do-List</h1>
			<form id="taskForm" onSubmit={handleSubmit}>
				<label htmlFor="taskText" className='taskText'>Agregar tarea</label>
				<input
					type="text"
					name="taskText"
					id="taskText"
					placeholder="Insertar tarea"
				/>
				<input type="submit" name="" id="" value="Enviar" />
				<input type="button" value="borrar" onClick={handleDelete} />
				<input type="button" value="editar" onClick={handleEdit} />
			</form>
		</>
	);
};

export default List;
