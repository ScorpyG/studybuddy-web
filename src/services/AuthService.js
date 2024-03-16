import http from "../http-common";

class AuthService {
    login(user) {
        return axios
            .post("/login", {
                username: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    async register(userData) {
        return http.post(`/users`, userData);
    }
}

export default new AuthService();