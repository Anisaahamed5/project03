import React from "react";
import "./todos.css"

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ""
            
        }
    }

    render() {

        return (
            <div className="form-group">
                    <label for="task">Task</label>
                    <input type="text" className="form-control" id="tasks" onChange={this.firstname_task} value={this.state.task}/>
                    
                    <span class="input-group-addon">
                        <button type="button" className="btn btn-primary">Add</button>
                    </span>

            </div>
        )
    }
}

class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    
    render() {

        return <div>
            <AddTodo></AddTodo>
            

        </div>

    }

}

export default Todos;