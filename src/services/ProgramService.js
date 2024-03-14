import http from '../http-common';

const API_URL = 'http://localhost:8080/api/programs';

class ProgramService {
    getAllPrograms() {
        return http.get(API_URL);
    }
}

export default new ProgramService();