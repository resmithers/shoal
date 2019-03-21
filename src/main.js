import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "chart.js";
import "hchs-vue-charts";
import firebase from "firebase";
import firebaseApp from "./firebase/init";

Vue.use(window.VueCharts);

Vue.config.productionTip = false;
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: <App />,
// });
let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
