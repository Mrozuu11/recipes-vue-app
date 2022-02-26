import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import store from "./store";
import config from "/config.js";

window.axios = require("axios");
Vue.prototype.$axios = window.axios;

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(config);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
