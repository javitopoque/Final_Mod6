import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import M from 'materialize-css';

createApp(App).use(store).use(router).use(VueAxios,axios).mount('#app')

import 'bootstrap/dist/js/bootstrap'