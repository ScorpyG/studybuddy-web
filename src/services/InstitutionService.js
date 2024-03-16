import http from '../http-common';

class InstitutionService {
    async getAllInstitutions() {
        const institutions = await http.get("/institutions");
        return institutions;
    }
}

export default new InstitutionService();