import http from "../http-common";

class AuthService {
    async login(user) {
        return http.post(`/login`, {
            userEmail: user.email,
            userPassword: user.password
        }).then(response => {
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
    logout() {
        sessionStorage.removeItem('user');
    }
    async register(userData) {
        return http.post(`/users`, userData);
    }
}

export default new AuthService();