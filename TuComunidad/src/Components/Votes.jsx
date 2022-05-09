import React, { Component } from 'react';
import FacilityService from "../services/FacilityService";
import VoteService from "../services/VoteService";
import {ProgressBar} from "react-bootstrap";
import ReserveFacilityService from "../services/ReserveFacilityService";


class Votes extends Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem("id") == '' || localStorage.getItem("id") == undefined ||
            localStorage.getItem("loginBy") != 'neighbour') {
            window.location.href = '/'
        }

        this.state = {
            votes :  [],
            vote : {
                idVote : '',
                title: '',
                description: '',
                manager: {idManager : 1},
                numberOfVotesInFavour : 0,
                numberOfVotesAgainst : 0
            },
            neighbour : {
                idNeighbour : 0
            },
            totalNumberOfVotesInFavour : 0,
            totalNumberOfVotesAgainst : 0,
            totalPercentage : 0,
            selectOptions : [],
            isNeighbourVoteAlready : false
        }

        this.voteTopicClick = this.voteTopicClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onVoteFavourOrAgainstValueChange = this.onVoteFavourOrAgainstValueChange.bind(this);
    }

    async fetchVotes() {
        console.log("------ Fetch Votes ------")
        await VoteService.getVotes()
            .then((response) => {
                this.setState({votes: response.data})
                //add the total number of votes who in favour
                let totalNumberOfVotesInFavour = 0;
                let totalNumberOfVotesAgainst = 0;
                let percentage = 0;
                response.data.forEach(subData => totalNumberOfVotesInFavour += subData.numberOfVotesInFavour);
                response.data.forEach(subData => totalNumberOfVotesAgainst += subData.numberOfVotesAgainst);
                percentage = (totalNumberOfVotesInFavour / (totalNumberOfVotesInFavour + totalNumberOfVotesAgainst)) * 100;
                this.setState({totalPercentage: percentage})
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.state.neighbour.idNeighbour = localStorage.getItem("id")
        VoteService.saveNeighbourVotes(this.state)
            .then((response) => {
                console.log(response);
                alert('Record Saved Successfully!')
                //navigaye("/employeeList");
            })
            .catch((error) => {
                console.log(error);
                alert('Record Not Saved')
            });

    }

    async onVoteFavourOrAgainstValueChange(event) {
            if (parseInt(event.target.value) == 1) {
                this.state.vote.numberOfVotesInFavour = this.state.vote.numberOfVotesInFavour + 1
           } else {
                this.state.vote.numberOfVotesAgainst =  this.state.vote.numberOfVotesAgainst + 1
            }
    }

    async voteTopicClick(e, idVote) {
        console.log(e)
        await VoteService.getVoteById(idVote)
            .then((response) => {

                //******************************************************************
                //get neigbour Votes and set flag for hide vote button
                let neighbourId = localStorage.getItem("id")
                VoteService.getNeighbourVoteById(neighbourId, idVote)
                    .then((response) => {
                        if(response.data == null || response.data.neighbour == null
                            || response.data.neighbour.idNeighbour == 0 )
                        {
                            this.setState({isNeighbourVoteAlready: false})
                        } else
                        {
                            this.setState({isNeighbourVoteAlready: true})
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                //******************************************************************


                this.setState({vote: response.data})
                let percentage = 0;
                percentage = (this.state.vote.numberOfVotesInFavour / (this.state.vote.numberOfVotesInFavour + this.state.vote.numberOfVotesAgainst)) * 100;
                this.setState({totalPercentage: percentage})
                this.state.neighbour.idNeighbour = 1;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount(){
        this.fetchVotes()
    }

    render() {
        return (
            <div className='content'>
            <div className='row'>
                <div className='col-md-4 '>
                    <div>
                        <h2 style={{fontSize: '30px', color: '#757575', marginBottom: '35px'}}>Votes</h2>
                    </div>
                    <table style={{width: '250px'}}>
                        <tbody>
                        {this.state.votes.length===0?
                            <tr align="center"><td colSpan="5">No Record Found</td></tr>:
                            this.state.votes.map(
                                (vote,index) =>(

                                    <tr style={{ backgroundColor: 'white'}} key = {vote.idVote}>

                                            <td>  <a href='#' onClick={(e) => this.voteTopicClick(e, vote.idVote)}> {vote.title}    </a></td>

                                    </tr>

                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>

                <div className='col-md-8'>
                    <form onSubmit={this.handleSubmit}>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <div className="form-group">
                            <label>Result:</label>
                            <ProgressBar now={this.state.totalPercentage} />

                            <input type={"hidden"} name="vote.title" value={this.state.vote.title}/>
                            <input type={"hidden"} name="vote.description" value={this.state.vote.description}/>
                            <input type={"hidden"} name="vote.manager.idManager" value={this.state.vote.manager.idManager}/>
                            <input type={"hidden"} name="neighbour.idNeighbour" value={this.state.neighbour.idNeighbour}/>

                        </div>
                        <div className="form-group">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <input type="radio" value="1" name="gender" onChange={this.onVoteFavourOrAgainstValueChange} /> In Favour
                                </div>
                                <div className='col-md-6'>
                                    <input type="radio" value="2" name="gender" onChange={this.onVoteFavourOrAgainstValueChange} /> Against
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            {this.state.isNeighbourVoteAlready ? "" : <button className="btn btn-success">Vote</button>}
                        </div>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}
export default Votes;