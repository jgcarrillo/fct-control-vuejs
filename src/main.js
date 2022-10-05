import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import './index.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App);

app.component('base-button', BaseButton);

app.use(store);
app.use(router);
app.use(Toast);

app.mount('#app');
