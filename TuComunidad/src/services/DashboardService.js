import axios from "axios";
const DASHBOARD_API_BASE_URL = "http://localhost:8080/dashboard";
class DashboardService {


    getAllDetails() {
        return axios.get(DASHBOARD_API_BASE_URL+"/findAll");
    }



}

export default new DashboardService();