import { createApp } from 'vue';

import Vue3Autocounter from 'vue3-autocounter';
import VuePaycard from "vue-paycard";

import router from "@/router";
import store from "@/store"
import Vuex from 'vuex'



import App from './App.vue';

import "@/assets/css/starter_style.css";
import "@/assets/css/main.css";
import veProgress from "vue-ellipse-progress";





const app = createApp(App)
app.component('vue3-autocounter', Vue3Autocounter)
app.use(router);
app.use(Vuex);
app.use(veProgress);
app.use(VuePaycard);
app.use(store);


app.mount("#app");