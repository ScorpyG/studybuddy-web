import Vuex from 'vuex';

// Create store
const store = new Vuex.Store({
    state: {
        // if sessionStorage has a user, then the user is logged in
        isLoggedIn: sessionStorage.getItem('user') !== null ? true : false,
    },
    getters: {
        getLoggedIn: state => {
            return state.isLoggedIn;
        }
    },
    mutations: {
        setLoggedInState(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        }
    }, 
});

export default store;