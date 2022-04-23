import { useState } from 'react';
import './App.css';
import List from './components/List';
import TaskDone from './components/TaskDone';
import ToDoTask from './components/ToDoTask';

const initialValue = () => {
	const saved = localStorage.getItem('tareas');
	const savedParse = JSON.parse(saved);
	return savedParse || [];
};
const initialValueTaskDone = () => {
	const taskDoneSaves = localStorage.getItem('tareasCompletadas');
	const taskDoneParsed = JSON.parse(taskDoneSaves);
	return taskDoneParsed || [];
};
let a = 2
function App() {
	const [tasks, setTasks] = useState(initialValue);
	const [taskDone, setTaskDone] = useState(initialValueTaskDone);
	const [itemId, setItemId] = useState(0);
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
	// console.log(tasks.length)
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
							taskDone={taskDone}
							setTaskDone={setTaskDone}
							tasks={tasks}
							setTasks={setTasks}
						/>
					))
				) : (
					<p>Sin tareas pendientes</p>
				)}
			</form>
			<h2>Tareas Completadas</h2>
			<form id="taskDoneForm">
			
				{taskDone.length > 0 ? (
					taskDone.map(el => (

						<TaskDone
							key={el[0].id}
							el={el}
							// taskDone={taskDone}
							// setTaskDone={setTaskDone}
						/>
					))
				) : (
					<p>Sin tareas</p>
				)}
			</form>
		</>
	);
}

export default App;
