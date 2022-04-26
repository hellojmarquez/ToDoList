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
function App() {
	const [tasks, setTasks] = useState(initialValue);
	const [taskDone, setTaskDone] = useState(initialValueTaskDone);
	const [itemId, setItemId] = useState(0);

	return (
		<div className="container">
			<List
				tasks={tasks}
				setTasks={setTasks}
				itemId={itemId}
			
			/>
			<form id="form" className="list">
				<h2 className="list__title --pending">Tareas pendientes</h2>
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
			<form id="taskDoneForm" className="list">
				<h2 className="list__title --done">Tareas Completadas</h2>
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
