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
                    
                    <div className="input-group mb-3">
                        <input type="text" className="form-control addtask" placeholder="Add task..." onChange={this.task_change} value={this.state.task}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary add" type="button" onClick={this.submit}>Add</button>
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
    
    let elements = tasks.map(function(task) {
        return <Task task={task} toggle={props.toggle} delete={props.delete}></Task>
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

    function deleteTask() {
        props.delete(props.task);
    }

    return <li className="list-group-item task">
        <input className="check" type="checkbox" checked={done} onChange={toggleTask}/>
        {text}
        <button className="btn btn-danger float-right" onClick={deleteTask}>Delete</button>
    </li>;
}

function Filters(props) {
    function classes(filter) {
        if(filter == props.filter) {
            return "btn btn-light active";
        } else {
            return "btn btn-light";
        }
    }

    function setAll() {
        props.setFilter(0);
    }

    function setProgress() {
        props.setFilter(1);

    }

    function setDone() {
        props.setFilter(2);
    }

    return <div className="btn-group filter" role="group" aria-label="Basic example">
        <button type="button" className={classes(0)} onClick={setAll}>All</button>
        <button type="button" className={classes(1)} onClick={setProgress}>In Progress</button>
        <button type="button" className={classes(2)} onClick={setDone}>Completed</button>
    </div>;
}

class Todos extends React.Component {
    constructor(props) {
        super(props);

        //Filters: 
        // 0 - all
        // 1 - in progress
        // 2 - completed
        this.state = {
            todos: [

            ],
            filter: 0
        }

        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.delete = this.delete.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.getTodos = this.getTodos.bind(this);
    }

    addTodo(taskName) {
        let newTodos = this.state.todos;
        newTodos.push({
            done: false,
            text: taskName
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

    delete(todo) {
        let index = this.state.todos.indexOf(todo);
        let newTodos = this.state.todos;

        newTodos.splice(index, 1);

        this.setState({todos: newTodos});
    }

    setFilter(filter) {
        this.setState({filter: filter});
    }

    getTodos() {
        if(this.state.filter == 0) {
            return this.state.todos;
        } else if(this.state.filter == 1) {
            let filteredTodos = this.state.todos.filter(function(todo) {
                return todo.done == false;
            });
            
            return filteredTodos;
        } else if(this.state.filter == 2) {
            let filteredTodos = this.state.todos.filter(function(todo) {
                return todo.done;
            });

            return filteredTodos;
        }
    }
    
    render() {
        return <div>
            <AddTodo add={this.addTodo}></AddTodo>
            <Tasks tasks={this.getTodos()} toggle={this.toggleTodo} delete={this.delete}></Tasks>
            <Filters filter={this.state.filter} setFilter={this.setFilter}></Filters>
        </div>
    }

}

export default Todos;