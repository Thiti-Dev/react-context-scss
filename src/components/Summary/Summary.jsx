import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { AreaChartOutlined } from '@ant-design/icons';

import MainStyle from '../../styles/main.module.scss';

//
// ─── CONTEXT ────────────────────────────────────────────────────────────────────
//
import TodoContext from '../../contexts/TodoContext';
// ────────────────────────────────────────────────────────────────────────────────

export default function Summary() {
	function countCompletedTodo(todos) {
		return todos.reduce((total_completed, element) => {
			if (element.completed) {
				return total_completed + 1;
			}
			return total_completed;
		}, 0);
	}
	return (
		<TodoContext>
			{(context) => (
				<div>
					<Row className={`${MainStyle.go_flex_centered} ${MainStyle.margin_little}`}>
						<Col xs={5} sm={5} md={5}>
							<Statistic title="Total Task" value={context.todos.length} prefix={<AreaChartOutlined />} />
						</Col>
						<Col>
							<Statistic title="Done" value={countCompletedTodo(context.todos)} suffix="/ 100" />
						</Col>
					</Row>
				</div>
			)}
		</TodoContext>
	);
}
