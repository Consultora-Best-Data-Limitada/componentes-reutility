import {createApp} from 'vue';
import App from './App.vue';

import './plugin/assets/fontawesome/css/all.min.css';
// import './assets/fonts/metropolis/metropolis.css';
// import './assets/css/main.css';

import { componentesReutility } from "./plugin/"

const app = createApp(App);
app.use(componentesReutility)
app.mount('#app')
