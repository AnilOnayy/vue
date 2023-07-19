import { createApp } from 'vue'
import App from './App.vue'

import '../../general-assets/bs-style.css';
import appHeader from  '@/components/appHeader.vue';

const app = createApp(App);


app.component("app-header",appHeader);


app.mount('#app');
