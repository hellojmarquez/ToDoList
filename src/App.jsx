import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import TaskDone from './components/TaskDone';
import ToDoTask from './components/ToDoTask';

const initialValue = () => {
	const saved = localStorage.getItem('tareas');
	const savedParse = JSON.parse(saved);
	return savedParse || [];
};
function App() {
	const [tasks, setTasks] = useState(initialValue);
	const [itemId, setItemId] = useState(null);
	const handleDelete = () => {
		// let isDelete = window.confirm(
		// 	`¿Deseas eliminar ta tarea con ID ${itemId}?`
		// );
		// if (isDelete) {
		let newD = tasks.filter(el => el.id !== itemId);
		setTasks(newD);
		// } else return;
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

	return (
		<>
			<List tasks={tasks} setTasks={setTasks} itemId={itemId} />
			<h2>Tareas pendientes</h2>

			<form id="form">
				<input type="button" value="borrar" onClick={handleDelete} />
				<input type="button" value="editar" onClick={handleEdit} />
				{tasks.length > 0 ? (
					tasks.map(el => (
						<ToDoTask
							key={el.id}
							el={el}
							itemId={itemId}
							setItemId={setItemId}
						/>
					))
				) : (
					<p>Sin tareas</p>
				)}
			</form>

			<TaskDone />
		</>
	);
}

export default App;
