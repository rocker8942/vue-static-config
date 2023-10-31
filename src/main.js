import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

fetch('/config.json?' + Date.now())
    .then(response => response.json())
    .then(config => {
        app.config.globalProperties.pageTitle = config.title;
        app.mount('#app');
    });
