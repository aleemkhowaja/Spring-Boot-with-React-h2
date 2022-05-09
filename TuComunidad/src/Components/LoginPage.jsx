import React, {Component, useState} from 'react';
import VoteService from "../services/VoteService";
import LoginService from "../services/LoginService";
import "../assets/styles/login.css";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessages : {},
            isSubmitted : false,
            loginBy : "manager"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async renderErrorMessage(name) {
        return name === this.state.errorMessages.name && (
            <div className="error">{this.state.errorMessages.message}</div>)
    }

    async handleSubmit(event) {
        event.preventDefault();

        const {uname, pass} = document.forms[0];
        LoginService.login(uname.value, pass.value, this.state.loginBy)
            .then((response) => {
                if(response.data == "success") {
                    this.props.history.push('/dashboard');
                }
                //navigaye("/employeeList");
            })
            .catch((error) => {
                console.log(error);
                alert('Record Not Saved')
            });
    }

    async loginByChange(event) {
        const value = event.target.value
        this.state.loginBy = value
    }


    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div className="input-container">
                        <label>Login By </label>
                        <select onChange={this.loginByChange}>
                            <option selected value="manager">Manager</option>
                            <option value="neighbour">Neighbour</option>
                        </select>
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )}
}

export default LoginPage;