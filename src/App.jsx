import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import TaskDone from './components/TaskDone';
import ToDoTask from './components/ToDoTask';

const initialValue = () => {
	const saved = localStorage.getItem('tareas');
	const savedParse = JSON.parse(saved);
	return savedParse || '';
};
function App() {
	const [tasks, setTasks] = useState(initialValue);
	const [itemId, setItemId] = useState(null);
	const handleDelete = () => {
		let isDelete = window.confirm(`¿Deseas eliminar ta tarea con ID{itemId}?`);
		if (isDelete) {
			let newD = tasks.filter(el => el.id !== itemId);
			setTasks(newD);
		} else return;
	};

	return (
		<>
			<List tasks={tasks} setTasks={setTasks} />
			<h2>Tareas pendientes</h2>

			<form id="form">
				<input type="button" value="borrar" onClick={handleDelete} />
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
