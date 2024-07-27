import http from '../http-common';

class UserService {
    async updateUserAccount(userData, userId) {
        return http.put(`/users/${userId}`, userData).then(response => {
            if (response.data !== null) {
                const userSessionData = {
                    id: response.data.id,
                    email: response.data.email,
                    phoneNumber: response.data.phoneNumber,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    program: response.data.program,
                    institution: response.data.institution,
                    hobbies: response.data.hobbies,
                }
                sessionStorage.setItem('user', JSON.stringify(userSessionData));
            }
        });
    }
    async getUserAccount(userId) {
        return http.get(`/users/${userId}`);
    }
}

export default new UserService();