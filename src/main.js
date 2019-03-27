import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "chart.js";
import "hchs-vue-charts";
import firebase from "firebase";
import { firebaseApp } from "./utils/config";

import "./CSS/superhero.css";

import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(window.VueCharts);

Vue.config.productionTip = false;

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
