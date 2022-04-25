import React from 'react';

const TaskDone = ({ el, taskDone, setTaskDone, itemId }) => {
	const handleDel = () => {
		let isfDelete = window.confirm(
			`¿Deseas eliminar ta tarea con ID ${el[0].id}?`
		);
		if (isfDelete) {
			let newdDd = taskDone.filter(ele => ele[0].id !== el[0].id);
			setTaskDone(newdDd);
		}
	};
	return (
		<div className="list__form">
			<div className="list__item">
				<label className="--done">{el[0].nam}</label>
			</div>
			<input
				type="button"
				value="borrar"
				onClick={handleDel}
				className="list__btn"
			/>
		</div>
	);
};

export default TaskDone;
