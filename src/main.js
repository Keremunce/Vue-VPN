import { createApp } from 'vue';

import Vue3Autocounter from 'vue3-autocounter';

import App from './App.vue';
import router from "./router";
import "@/assets/css/starter_style.css";
import "@/assets/css/main.css";
import "@/assets/css/About.css";
import "@/assets/css/thirdPage.css";
import "@/assets/css/fourthPage.css";
import "@/assets/css/eighth.css";

const app = createApp(App);
app.component('vue3-autocounter', Vue3Autocounter)
app.use(router);
app.mount("#app");
