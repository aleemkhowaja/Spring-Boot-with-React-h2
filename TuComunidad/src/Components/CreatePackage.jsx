import React, { Component } from 'react';
import FacilityService from "../services/FacilityService";
import VoteService from "../services/VoteService";
import {ProgressBar} from "react-bootstrap";
import ReserveFacilityService from "../services/ReserveFacilityService";
import DatePicker from "react-datepicker";
import PackageService from "../services/PackageService";


class CreatePackage extends Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem("id") == '' || localStorage.getItem("id") == undefined ||
            localStorage.getItem("loginBy") != 'concierge') {
            window.location.href = '/'
        }

        this.state = {
            title : '',
            reservationDate: new Date(),
            description: '',
        }

        this.createPackage = this.createPackage.bind(this);
        this.pickUpDateChange = this.pickUpDateChange.bind(this);
    }

    async createPackage(event) {
        event.preventDefault();
        const {title, description} = document.forms[0];
        this.state.title = title.value;
        this.state.description = description.value;
        PackageService.savePackage(this.state)
            .then((response) => {
                console.log(response);
                alert('Record Saved Successfully!')
                this.clearForm();
            })
            .catch((error) => {
                console.log(error);
                alert('Record Not Saved')
            });

    }

    componentDidMount(){
        //this.fetchVotes()
    }

    render() {
        return (
            <div className='content'>
            <div className='row'>
                <div className="title">Create Package</div>
                <div className='col-md-8'>
                    <form onSubmit={this.createPackage}>
                        <div className='row form-group'>
                            <div className='col-md-5'>
                                <label>Name :  </label>
                            </div>
                            <div className='col-md-8'>
                                <input style={{width:300}} type="text" name="title"  required />
                            </div>
                        </div>

                        <div className='row form-group'>
                            <div className='col-md-6'>
                                <label>Date of Pick up :  </label>
                            </div>
                            <div className='col-md-8'>
                                <DatePicker  selected={this.state.reservationDate}  onChange={this.pickUpDateChange}
                                            dateFormat="yyyy-MM-dd"
                                />
                            </div>
                        </div>

                        <div className='row form-group'>
                            <div className='col-md-5'>
                                <label>Description :  </label>
                            </div>
                            <div className='col-md-8'>
                                <textarea rows="10" cols="100" name="description"  >
                                </textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-success">Create Package</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        );
    }

    pickUpDateChange = date => {
        this.setState({
            reservationDate: date
        })
    }

    async clearForm() {
        this.state.title = ''
        this.state.description = ''
    }

}




export default CreatePackage;