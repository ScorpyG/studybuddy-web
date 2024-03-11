import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

class AuthService {
    login(user) {
        return axios
            .post(`${API_URL}/login`, {
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

    register(user) {
        return axios.post(`${API_URL}/register`, {
            username: user.username,
            email: user.email,
            password: user.password
            // TODO: add more fields
        });
    }
}

export default new AuthService();