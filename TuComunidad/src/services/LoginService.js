import axios from "axios";
const VOTES_API_BASE_URL = "http://localhost:8080/user";
class LoginService {


    login(email, pass, loginBy) {
        return axios.post(VOTES_API_BASE_URL+"/login", null,{params: {
            "email" : email,
            "password" : pass,
            "loginBy" : loginBy
        }});
    }

}

export default new LoginService();