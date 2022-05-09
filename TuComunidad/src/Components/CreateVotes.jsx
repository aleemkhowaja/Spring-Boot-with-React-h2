import React, { Component } from 'react';
import FacilityService from "../services/FacilityService";
import VoteService from "../services/VoteService";
import {ProgressBar} from "react-bootstrap";
import ReserveFacilityService from "../services/ReserveFacilityService";


class CreateVotes extends Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem("id") == '' || localStorage.getItem("id") == undefined ||
            localStorage.getItem("loginBy") != 'manager') {
            window.location.href = '/'
        }

        this.state = {
            idVote : '',
            title: '',
            description: '',
            manager: {idManager : 0},
            numberOfVotesInFavour : 0,
            numberOfVotesAgainst : 0
        }

        this.createVote = this.createVote.bind(this);
    }

    async clearForm() {
        this.state.idVote = ''
        this.state.title = ''
        this.state.description = ''
        this.state.manager =  0
        this.state.numberOfVotesInFavour = 0
        this.state.numberOfVotesAgainst = 0

    }

    async createVote(event) {
        event.preventDefault();
        this.state.manager.idManager = localStorage.getItem("id")
        const {title, description} = document.forms[0];
        this.state.title = title.value;
        this.state.description = description.value;
        VoteService.saveVote(this.state)
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
                <div className="title">Create Vote</div>
                <div className='col-md-8'>
                    <form onSubmit={this.createVote}>
                        <div className='row form-group'>
                            <div className='col-md-5'>
                                <label>Title :  </label>
                            </div>
                            <div className='col-md-8'>
                                <input style={{width:300}} type="text" name="title"  required />
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
                            <button className="btn btn-success">Create Vote</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}
export default CreateVotes;