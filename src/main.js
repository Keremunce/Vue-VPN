import { createApp } from 'vue';

import Vue3Autocounter from 'vue3-autocounter';

import App from './App.vue';
import router from "./router";
import "@/assets/css/starter_style.css";
import "@/assets/css/main.css";
import veProgress from "vue-ellipse-progress";

// Vue.use(VueEllipseProgress, "vep"); you can define a name and use the plugin like <vep/>

const app = createApp(App);
app.component('vue3-autocounter', Vue3Autocounter)
app.use(router);
app.use(veProgress);

app.mount("#app");
