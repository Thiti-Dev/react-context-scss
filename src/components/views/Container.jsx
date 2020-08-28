import React, { Component } from 'react';
//
// ─── COMPONENT IMPORTING ────────────────────────────────────────────────────────
//
import Todo from '../Todo/Todo';
import Summary from '../Summary/';
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── CONTEXT ────────────────────────────────────────────────────────────────────
//
import TodoContext, { TodoProvider } from '../../contexts/TodoContext';
// ────────────────────────────────────────────────────────────────────────────────

export default class Container extends Component {
	render() {
		return (
			<React.Fragment>
				<TodoProvider>
					<Todo />
					<Summary />
				</TodoProvider>
			</React.Fragment>
		);
	}
}
