import React from "react";
import "./todos.css"

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: "" 
        
        }
    
        this.task_change = this.task_change.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.props.add(this.state.task);
    }

    task_change(e) {
        this.setState({
            task: e.target.value
        })
    }

    render() {
        return (
            <div className="form-group">
                    
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Add task..." onChange={this.task_change} value={this.state.task}/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" onClick={this.submit}>Submit</button>
                        </div>
                    </div>
                  {/* </div> <span class="input-group-addon">
                        <button type="button" className="btn btn-primary" onClick={this.submit}>Add</button>
                    </span>*/}
            </div> 
        )
    }
}

function Tasks(props) {
    let tasks = props.tasks;
    
    let elements = tasks.map(function(e) {
        return <Task task={e} toggle={props.toggle}></Task>
    });

    return <ul class="list-group">
        {elements}
    </ul>;
}

function Task(props) {
    let done = props.task.done;
    let text = props.task.text;

    function toggleTask() {
        props.toggle(props.task);
    }

    return <li className="list-group-item">
        <input className="check" type="checkbox" checked={done} onChange={toggleTask}/>
        {text}
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
                
            ]
        }

        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
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

    toggleTodo(todo) {
        let index = this.state.todos.indexOf(todo);
        
        let newTodos = this.state.todos;
        newTodos[index] = {
            done: !todo.done,
            text: todo.text
        }

        this.setState({todos: newTodos});
    }
    
    render() {
        return <div>
            <AddTodo add={this.addTodo}></AddTodo>
            <Tasks tasks={this.state.todos} toggle={this.toggleTodo}></Tasks>
            <Filters></Filters>
        </div>
    }

}

export default Todos;