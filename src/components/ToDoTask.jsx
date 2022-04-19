import React from 'react';

const ToDoTask = ({ el, setItemId, itemId }) => {
	
	const { id, nam } = el;
	let handlecheck = e => {
		setItemId(id);
	};
	return (
		<>
			<input
				type="checkbox"
				name="tarea"
				id="box"
				value={id}
				onChange={handlecheck}
			/>
			<label>{nam}</label>
			<br></br>
		</>
	);
};

export default ToDoTask;
