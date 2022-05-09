import axios from "axios";
const PACKAGES_API_BASE_URL = "http://localhost:8080/package";
class PackageService {


    getPackages() {
        return axios.get(PACKAGES_API_BASE_URL+"/findAll");
    }

    savePackage(packg) {
        return axios.post(PACKAGES_API_BASE_URL+"/save", packg);
    }
}

export default new PackageService();