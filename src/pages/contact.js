import React, { Component } from "react";
import EmailForm from "../components/emailform";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }
    handleInputChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;

        const loginUser = {
            email,
            password
        }
        //attempt to login
        this.props.login(loginUser);
    };
    render() {
        return (
            <EmailForm />
        );
    }
}

export default Contact;