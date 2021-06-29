import axios from "axios";

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get('http://localhost:8080/api/jobAdvertisements/getall')
    }

    getCities() {
        return axios.get("http://localhost:8080/api/cities/getAll")
    }

    getWayOfWorkings() {
        return axios.get("http://localhost:8080/api/wayOfWorkings/getAll")
    }

    getWorkingTimes() {
        return axios.get("http://localhost:8080/api/workingTimes/getAll")
    }

    getOccupations() {
        return axios.get("http://localhost:8080/api/occupations/getall")
    }
}