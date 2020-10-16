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
    }

    render() {
        return (
            <>
                <div className="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" className="form-control" id="firstname"/>
                </div>

                <div className="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" className="form-control" id="lastname"/>
                </div>

                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email"/>
                </div>

                <div className="form-group">
                    <label for="comments">Comments</label>
                    <input type="textarea" className="form-control" id="comments"/>
                </div>

                <button type="button" className="btn btn-primary">Submit</button>


            </>
        );
    }

}

export default Contact;
