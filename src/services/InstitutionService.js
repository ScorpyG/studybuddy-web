import http from '../http-common';

const API_URL = `${import.meta.env.VITE_API_URL}institutions`;

class InstitutionService {
    getAllInstitutions() {
        return http.get(API_URL);
    }
}

export default new InstitutionService();