import axios from "axios";
const RESERVE_FACILITY_API_BASE_URL = "http://localhost:8080/facilites";
class FacilityService {


    getFacilities() {
        return axios.get(RESERVE_FACILITY_API_BASE_URL+"/findAllFacilities");
    }

}

export default new FacilityService();