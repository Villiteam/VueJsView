import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./Plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./Router";

import "@/assets/css/main.css";

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
