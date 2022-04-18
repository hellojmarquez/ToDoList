import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import TaskDone from './components/TaskDone';
import ToDoTask from './components/ToDoTask';

function App() {
	const [Tasks, setTasks] = useState(() => {
		const saved = localStorage.getItem('tareas');
		const initialValue = JSON.parse(saved);
		return initialValue || '';
	});
	const [itemId, setItemId] = useState(null)
	const handleDelete = id => {
		console.log(itemId)
	};

	return (
		<>
			<List Tasks={Tasks} setTasks={setTasks} />
			<h2>Tareas pendientes</h2>

			<form id="form">
				<input type="button" value="borrar" onClick={handleDelete} />
				{Tasks.length > 0 ? (
					Tasks.map(el => (
						<ToDoTask key={el.id} el={el} itemId={itemId} setItemId={setItemId} />
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
