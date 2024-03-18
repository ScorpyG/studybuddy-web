import http from '../http-common';

class ProgramService {
    async getAllPrograms() {
        const programs = await http.get("/programs");
        return programs;
    }
}

export default new ProgramService();