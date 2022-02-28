import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import store from "./store";
import config from "/config.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMagnifyingGlass, faBars, faHeart);

Vue.component("font-awesome-icon", FontAwesomeIcon);

window.axios = require("axios");
Vue.prototype.$axios = window.axios;

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(config);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
