import React, { useEffect, useState } from 'react';

const ToDoTask = ({
	el,
	setItemId,
	taskDone,
	setTaskDone,
	tasks,
	setTasks,
}) => {
	const { id, nam } = el;
	const handlecheck = () => {
		setItemId(id);
	};
	const handleComplete = () => {
		const setData = async () => {
			if (tasks.length >= 2) {
				let completedTask = tasks.filter(ele => ele.id === el.id);
				let completedTaskDone = tasks.filter(ele => ele.id !== el.id);
				if (completedTask) {
					setTasks(completedTaskDone);
					setTaskDone(taskDone => [...taskDone, completedTask]);
				}
			} else {
				let lastTask = tasks.filter(ele => ele.id === el.id);
				await setTaskDone(taskDone => [...taskDone, lastTask]);
				await setTasks([]);
			}
		};
		setData();
	};
	useEffect(() => {
		localStorage.setItem('tareasCompletadas', JSON.stringify(taskDone));
	}, [taskDone]);
	return (
		<div className="toDoFormTask">
			<div className='toDoFormTask-item'>
				<input
					type="checkbox"
					name="tarea"
					id="box"
					value={id}
					onChange={handlecheck}
				/>
				<label className="--pending">{nam}</label>
			</div>
			<input
				type="button"
				value="completar"
				onClick={handleComplete}
				className="toDoForm-btn"
			/>
		</div>
	);
};

export default ToDoTask;
