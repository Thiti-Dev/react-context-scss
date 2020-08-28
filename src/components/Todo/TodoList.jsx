import React from 'react';
import { Checkbox } from 'antd';
import MainStyle from '../../styles/main.module.scss';
export default function TodoList({ name, index, context, completed }) {
	function onChange(e) {
		//console.log(context);
		console.log(`name=${name}, index=${index}, checked = ${e.target.checked}`);
		context.setTaskCompleted(index, e.target.checked);
	}
	return (
		<React.Fragment>
			<div style={{ display: 'flex' }}>
				<Checkbox value={completed} defaultChecked={completed} onChange={onChange} />
				<ul style={{ display: 'table', margin: '0 auto' }}>
					<li className={MainStyle.centered_text_disbled}>{name}</li>
				</ul>
			</div>
		</React.Fragment>
	);
}
