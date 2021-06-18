import axios from "axios";

export default class OccupationService {
    getOccupations() {
        return axios.get("http://localhost:8080/api/occupations/getall")
    }
}