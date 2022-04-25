import React, { useEffect } from 'react';

const List = ({ tasks, setTasks, itemId }) => {
	const handleDelete = () => {
		let isDelete = window.confirm(
			`¿Deseas eliminar ta tarea con ID ${itemId}?`
		);
		if (isDelete) {
			let newD = tasks.filter(el => el.id !== itemId);
			setTasks(newD);
		}
	};
	const handleEdit = () => {
		console.log();
		let editData = tasks.filter(el => el.id === itemId);
		let num = editData[0].id;
		if (tasks.indexOf(num)) {
			taskForm.taskText.value = editData[0].nam;
			setItemId(num);
			console.log(itemId);
		}
	};
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
				console.log(findData);
				//funcion editar
				console.log('hola');
				const data = {
					id: findData.id,
					nam: capitaltext,
				};
				let editedTask = tasks.map(u => (u.id !== data.id ? u : data));
				setTasks(editedTask);
				location.reload();
			} else {
				//funciuon agregar
				const data = {
					id: Date.now(),
					nam: capitaltext,
				};
				setTasks(tasks => [...tasks, data]);
				taskForm.reset()
			}

		}
	};

	useEffect(() => {
		localStorage.setItem('tareas', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<form id="taskForm" className="taskForm" onSubmit={handleSubmit}>
			<h1 className="taskForm__title">To-Do-List</h1>
			<div className="taskForm__insertTask">
				<label htmlFor="taskText" className="taskForm__text">
					Agregar tarea
				</label>
				<input
					type="text"
					name="taskText"
					id="taskText"
					placeholder="Insertar tarea"
					className="taskForm__input"
				/>
				<input type="submit" name="" id="" value="Enviar" />
			</div>
			<input
				type="button"
				value="borrar"
				onClick={handleDelete}
				className="taskForm__btn"
			/>
			<input
				type="button"
				value="editar"
				onClick={handleEdit}
				className="taskForm__btn"
			/>
		</form>
	);
};

export default List;
