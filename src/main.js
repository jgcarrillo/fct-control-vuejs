import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import './index.css';

import TheData from './components/layout/TheData.vue';
import TheNavbar from './components/layout/TheNavbar.vue';
import TheUser from './components/layout/TheUser.vue';

const app = createApp(App);

app.component('the-data', TheData);
app.component('the-navbar', TheNavbar);
app.component('the-user', TheUser);

app.use(store);
app.use(router);

app.mount('#app');
