import axios from "axios";

export default class JobSeekerService {
    getJobSeekers() {
        return axios.get("http://localhost:8080/api/jobSeekers/getall")
    }

    getJobSeekerById(id) {
        return axios.get("http://localhost:8080/api/jobSeekers/findById?id=" + id)
    }
}