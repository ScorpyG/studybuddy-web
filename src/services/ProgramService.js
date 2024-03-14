import http from '../http-common';

const API_URL = `${import.meta.env.VITE_API_URL}/programs`;

class ProgramService {
    getAllPrograms() {
        return http.get(API_URL);
    }
}

export default new ProgramService();