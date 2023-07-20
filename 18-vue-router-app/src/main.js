import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import appAxios from '@/utils/appAxios';

const app = createApp(App);

app.use(router);

app.config.globalProperties.$axios = axios; // global axios defining

app.config.globalProperties.$appAxios = appAxios; // global axios defining

app.mount('#app');
