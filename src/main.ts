import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
// import store from "@/_demo/store";
import vuetify from "./plugins/vuetify";

import AppLayout from './layouts/_AppLayout.vue'

Vue.component('AppLayout', AppLayout)

Vue.config.productionTip = false;

type VForm = Vue & {
  validate: () => boolean;
  resetValidation: () => boolean;
  reset: () => void;
};

export default new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
