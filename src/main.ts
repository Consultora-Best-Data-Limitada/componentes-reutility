import { createApp } from "vue";
import App from "./App.vue";

import "./assets/fonts/metropolis/metropolis.css";

import { componentesReutility } from "./";

const app = createApp(App);
app.use(componentesReutility);
app.mount("#app");
