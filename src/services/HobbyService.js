import http from "../http-common";

const API_URL = "http://localhost:8080/api/hobbies";

class HobbyService {
    getAllHobbies() {
        return http.get(API_URL);
    }
}

export default new HobbyService();