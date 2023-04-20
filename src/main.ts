import {createApp} from 'vue';
import App from './App.vue';

import './plugin/assets/fontawesome/css/all.min.css';
import './plugin/assets/icomoon/icomoon.css';


import { componentesReutility } from "./plugin/"

const app = createApp(App);
app.use(componentesReutility)
app.mount('#app')
