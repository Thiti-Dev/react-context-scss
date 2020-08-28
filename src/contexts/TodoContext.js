import React, { Component } from 'react'

const TodoContext = React.createContext()

export class TodoProvider extends Component {
    state = {
        todos: []
    }
    addTask(task_name) {
		const updated_todos = [ ...this.state.todos ];
		updated_todos.push({ name: task_name,completed:false });
		this.setState({ todos: updated_todos },()=> this.alignTask());
    }
    alignTask(){
        // Let the un-checked task stay on top
        const _todos = [...this.state.todos]
        _todos.sort(function (a, b) {
            return +a.completed - +b.completed;
          });
          console.table(_todos)
        this.setState({todos:_todos})
    }
    setTaskCompleted(index,bool){
        const _todos = [...this.state.todos]
        _todos[index].completed = bool 
        this.setState({todos:_todos},()=> {
            console.table(this.state.todos)
            this.alignTask()
        })
    }
    render(){
        return (
            <TodoContext.Provider value={{ todos:this.state.todos, addTask:this.addTask.bind(this), setTaskCompleted:this.setTaskCompleted.bind(this) }}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}

export default TodoContext