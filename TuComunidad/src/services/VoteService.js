import axios from "axios";
const VOTES_API_BASE_URL = "http://localhost:8080/votes";
class VoteService {


    getVotes() {
        return axios.get(VOTES_API_BASE_URL+"/findAll");
    }

    getVoteById(id) {
        return axios.get(VOTES_API_BASE_URL+"/findbyId/"+id);
    }

    getNeighbourVoteById(neighbourId, voteId) {
        return axios.get(VOTES_API_BASE_URL+"/findNeighbourVotesByNeighbourId/"+neighbourId+"/"+voteId);
    }

    saveNeighbourVotes(neighbourVote) {
        return axios.post(VOTES_API_BASE_URL+"/save", neighbourVote);
    }

    saveVote(vote) {
        return axios.post(VOTES_API_BASE_URL+"/saveVote", vote);
    }

}

export default new VoteService();