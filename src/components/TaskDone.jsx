import React from 'react';

const TaskDone = ({ el }) => {
	console.log(el);
	return (
		<>
			<input type="checkbox"/>
			<label>{el[0].nam}</label>
			<br></br>
		</>
	);
};

export default TaskDone;
