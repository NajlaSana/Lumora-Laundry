import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from './router'; // Import router
import "./assets/style.css"; // Sesuaikan dengan proyek kamu

createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mount('#app');