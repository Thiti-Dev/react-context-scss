import React, { Component } from 'react';
import MainStyle from '../../styles/main.module.scss';

import { Row, Col, Card, Input } from 'antd';

//
// ─── CONTEXT ────────────────────────────────────────────────────────────────────
//
import TodoContext from '../../contexts/TodoContext';
import TodoList from './TodoList';
// ────────────────────────────────────────────────────────────────────────────────

//declaration
const { Search } = Input;

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	addTask(context, task_name) {
		context.addTask(task_name);
	}
	render() {
		let rendered_todo2 = (
			<TodoContext.Consumer>
				{(context) => (
					<React.Fragment>
						<div className={MainStyle.list_holder}>
							{context.todos.map((element, index) => (
								<TodoList
									key={index + element.name}
									index={index}
									completed={element.completed}
									name={element.name}
									context={context}
								/>
							))}
						</div>
					</React.Fragment>
				)}
			</TodoContext.Consumer>
		);
		return (
			<TodoContext.Consumer>
				{(context) => (
					<Row>
						<Col span={24} style={{ display: 'flex', flexDirection: 'column' }}>
							<h1 className={MainStyle.center_header}>Todo-List Application</h1>

							<Card
								style={{ width: 500 }}
								className={`${MainStyle.flex_center} ${MainStyle.go_flex_centered}`}
							>
								<Search
									placeholder="input search text"
									enterButton="Add"
									onSearch={this.addTask.bind(this, context)}
									style={{ width: 350 }}
								/>
								{rendered_todo2}
							</Card>
						</Col>
					</Row>
				)}
			</TodoContext.Consumer>
		);
	}
}
