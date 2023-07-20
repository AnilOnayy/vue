import { createApp } from 'vue'
import App from './App.vue'
import router from '../router';
import '@/assets/style.css';

import appHeader from '@/components/Shared/appHeader';
import AppBookmarkList from '@/components/Shared/AppBookmarkList';


const app = createApp(App);
 
app.use(router);

app.component("AppHeader",appHeader);
app.component("AppBookmarkList",AppBookmarkList);


app.mount('#app');
