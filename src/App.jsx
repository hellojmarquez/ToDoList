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
let a = 2;
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
	return (
		<div className="container">
			<List
				tasks={tasks}
				setTasks={setTasks}
				itemId={itemId}
				handleDelete={handleDelete}
				handleEdit={handleEdit}
			/>
			<form id="form" className="toDoForm">
				<h2 className="taskList --pending">Tareas pendientes</h2>
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
			<form id="taskDoneForm" className="taskDoneForm">
				<h2 className="taskList --done">Tareas Completadas</h2>
				{taskDone.length > 0 ? (
					taskDone.map(el => (
						<TaskDone
							key={el[0].id}
							el={el}
							taskDone={taskDone}
							setTaskDone={setTaskDone}
							itemId={itemId}
						/>
					))
				) : (
					<p>Sin tareas completadas</p>
				)}
			</form>
		</div>
	);
}

export default App;
