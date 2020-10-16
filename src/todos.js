import React from "react";
import "./todos.css"

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: "" 
        }
    }

    submit() {
        this.props.add(this.state.task);
    }

    render() {
        return (
            <div className="form-group">
                    <label for="task">Task</label>
                    <input type="text" className="form-control" id="tasks" onChange={this.firstname_task} value={this.state.task}/>
                    
                    <span class="input-group-addon">
                        <button type="button" className="btn btn-primary" onClick={this.submit}>Add</button>
                    </span>
            </div>
        )
    }
}

function Tasks(props) {
    let tasks = props.tasks;
    
    let elements = tasks.map(function(e) {
        return <Task task={e}></Task>
    });

    return <ul class="list-group">
        {elements}
    </ul>;
}

function Task(props) {
    let done = props.task.done;
    let text = props.task.text;

    return <li class="list-group-item">
        <input type="checkbox" checked={done}/>
        Text: {text}
    </li>;
}

function Filters(props) {
    return <div></div>;
}

class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    done: true,
                    text: "Finish 'add todo' form"
                },
                {
                    done: false,
                    text: "Create todos list"
                },
                {
                    done: false,
                    text: "Implement filters"
                }
            ]
        }

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(text) {
        let newTodos = this.state.todos;
        newTodos.push({
            done: false,
            text: text
        });

        this.setState({
            todos: newTodos
        });
    }
    
    render() {
        return <div>
            <AddTodo add={this.addTodo}></AddTodo>
            <Tasks tasks={this.state.todos}></Tasks>
            <Filters></Filters>
        </div>
    }

}

export default Todos;