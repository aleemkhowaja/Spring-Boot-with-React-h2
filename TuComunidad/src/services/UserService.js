import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/user";
class UserService {


    getUsers() {
        return axios.get(USER_API_BASE_URL+"/findAll");
    }

    getUserById(id) {
        return axios.get(USER_API_BASE_URL+"/findbyId/"+id);
    }


    saveUser(neighbourVote) {
        return axios.post(USER_API_BASE_URL+"/save", neighbourVote);
    }

}

export default new UserService();