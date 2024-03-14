import http from '../http-common';

const API_URL = 'http://localhost:8080/api/institutions';

class InstitutionService {
    getAllInstitutions() {
        return http.get(API_URL);
    }
}

export default new InstitutionService();