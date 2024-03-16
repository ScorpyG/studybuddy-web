import http from '../http-common';

class UserService {
    async updateUserAccount(userData) {
        return http.put(`/users/1`, userData);
    }
    async getUserData(userId) {
        return http.get(`/users/${userId}`);
    }
}

export default new UserService();