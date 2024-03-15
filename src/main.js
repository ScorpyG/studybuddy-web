import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vue3Toasity, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

app.use(router).use(Vue3Toasity, {
    autoClose: 5000,
    limit: 3,
    position: toast.POSITION.TOP_RIGHT,
});

app.mount('#app')
