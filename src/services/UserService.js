import http from '../http-common';

// TODO: implement adding user to vuex store and pull user's data
class UserService {
    async updateUserAccount(userData, userId) {
        // return http.put(`/users/${userId}`, userData);
        return http.put(`/users/1`, userData);
    }
    async getUserAccount(userId) {
        // return http.get(`/users/${userId}`);
        return http.get(`/users/1`);
    }
}

export default new UserService();