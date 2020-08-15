import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;

// check user/auth status (sessions)
let authState;
firebase.auth().onAuthStateChanged(() => {
  if (!authState) {
    new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
