import { createApp } from 'vue'
import App from './App.vue'
import router from '../router';

// Css Files
import '@/assets/style.css';

// Components
import appHeader from '@/components/Shared/appHeader';
import AppBookmarkList from '@/components/Shared/AppBookmarkList';

// Global Utils
import appAxios from './utils/appAxios';

const app = createApp(App);
 
app.use(router);

app.component("AppHeader",appHeader);
app.component("AppBookmarkList",AppBookmarkList);

app.config.globalProperties.$appAxios = appAxios;


app.mount('#app');
