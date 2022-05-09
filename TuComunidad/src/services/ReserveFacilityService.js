import axios from "axios";
const RESERVE_FACILITY_API_BASE_URL = "http://localhost:8080/facilites";
class ReserveFacilityService {


    saveReserveFacility(employee) {
        return axios.post(RESERVE_FACILITY_API_BASE_URL+"/save", employee);
    }

}

export default new ReserveFacilityService();