import React, { Component } from 'react';
import ReserveFacilityService from "../services/ReserveFacilityService";
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);

        this.saveUser = this.saveUser.bind(this);
        this.userTypeChange = this.userTypeChange.bind(this);

        this.state = {
            email : '',
            password : '',
            name : '',
            identification : '',
            floor : '',
            type : ''
        }
    }


    render() {
        return (


            <div className='content form' >
                <div className="row form-group">
                    <div className='col-md-2'>  <Link to="/">Login</Link> </div>
                </div>
                <div className='row'> <div className='col-md-8'> <h2>Register Here</h2> </div> </div>
                <div className='row'> <div className='col-md-1'> </div> </div>

                        <form onSubmit={this.saveUser} >
                            <div className='row form-group'>
                                <div className='col-md-1'>
                                    <label>Full Name :  </label>
                                </div>
                                <div className='col-md-8'>
                                     <input style={{width:300}} type="text" name="name" required />
                                </div>
                            </div>
                            <div className='row form-group'>
                                <div className='col-md-1'>
                                    <label>Email :</label>
                                </div>
                                <div className='col-md-6'>
                                    <input style={{width:300}} type="email" name="email" required />
                                </div>
                            </div>

                            <div className='row form-group'>
                                <div className='col-md-1'>
                                    <label>Password :</label>
                                </div>
                                <div className='col-md-6'>
                                    <input style={{width:300}} type="password" name="password" required />
                                </div>
                            </div>


                            <div className='row form-group'>
                                <div className='col-md-1'>
                                    <label>Identification:  </label>
                                </div>
                                <div className='col-md-8'>
                                    <input style={{width:300}} type="text" name="identification" required />
                                </div>
                            </div>

                            <div className='row form-group'>
                                <div className='col-md-1'>
                                    <label>Floor:  </label>
                                </div>
                                <div className='col-md-8'>
                                    <input style={{width:300}} type="text" name="floor" required />
                                </div>
                            </div>

                            <div className='row form-group'>
                                <div className='col-md-1'>
                                    <label>User Type</label>
                                </div>
                                <div className='col-md-8'>
                                    <select onChange={this.userTypeChange}>
                                        <option selected value="manager">Select user type</option>
                                        <option value="manager">Manager </option>
                                        <option value="neighbour">Neighbour</option>
                                        <option value="concierge">Concierge</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className='col-md-2'> <button className="btn btn-success">Register</button>  </div>
                            </div>

                        </form>
            </div>
        );
    }

    async saveUser(event) {
        event.preventDefault();

        const {name, email, password, floor, identification} = document.forms[0];
        this.state.name = name.value;
        this.state.email = email.value;
        this.state.password = password.value;
        this.state.floor = floor.value;
        this.state.identification = identification.value;

        UserService.saveUser(this.state)
            .then((response) => {
                console.log(response);
                alert('User Registered Successfully!')
                window.location.href = '/'
            })
            .catch((error) => {
                const errorRes = error.response.data;
                if(errorRes != null && errorRes != undefined)
                   alert(errorRes.message)
                else alert('Record Not Saved')
            });

    }

    async userTypeChange(event) {
        event.preventDefault();
        const value = event.target.value
        this.state.type = value;
    }

}

export default User;