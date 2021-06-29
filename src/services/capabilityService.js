import axios from "axios";

export default class CapabilityService {
    getCapabilities() {
        return axios.get("http://localhost:8080/api/capabilities/getAll")
    }
}