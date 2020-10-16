import React from "react";
import "./contact.css";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            comments: "",
        }

        this.firstname_change = this.firstname_change.bind(this);
        this.lastname_change = this.lastname_change.bind(this);
        this.email_change = this.email_change.bind(this);
        this.comments_change = this.comments_change.bind(this);
    }

    firstname_change(e) {
        this.setState({
            firstname: e.target.value
        })
    }

    lastname_change(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    email_change(e) {
        this.setState({
            email: e.target.value
        })
    }

    comments_change(e) {
        this.setState({
            comments: e.target.value
        })
    }

    render() {
        return (
            <>
                <div className="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" className="form-control" id="firstname" onChange={this.firstname_change} value={this.state.firstname}/>
                </div>

                <div className="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" className="form-control" id="lastname" onChange={this.lastname_change} value={this.state.lastname}/>
                </div>

                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email" onChange={this.email_change} value={this.state.email}/>
                </div>

                <div className="form-group">
                    <label for="comments">Comments</label>
                    <input type="textarea" className="form-control" id="comments" onChange={this.comments_change} value={this.state.comments}/>
                </div>

                <button type="button" className="btn btn-primary">Submit</button>


            </>
        );
    }

}

export default Contact;
