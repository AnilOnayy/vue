import { createApp } from 'vue'
import App from './App.vue'

import storex from './store/index';

const app = createApp(App);

app.use(storex);


app.mount('#app');
