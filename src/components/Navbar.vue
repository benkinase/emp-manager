<template>
  <div>
    <nav>
      <div class="nav-wrapper grey darken-3">
        <div class="container">
          <router-link to="/" class="brand-logo">EmpManager</router-link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"
            ><i class="material-icons">menu</i></a
          >
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <span v-if="!isLoggedIn">
              <li>
                <router-link to="/register" class="spacing"
                  >SIGN-UP</router-link
                >
              </li>
              <li>
                <router-link to="/login" class="spacing">LOGIN</router-link>
              </li>
            </span>
            <span v-else>
              <li><i class="material-icons prefix">person</i></li>
              <li>
                <span>{{ currentUser }}</span>
              </li>
              <li>
                <router-link to="/" class="spacing">DASHBOARD</router-link>
              </li>
              <li><a @click="userLogOut" class="chip red">LOGOUT</a></li>
            </span>
          </ul>
        </div>
      </div>
    </nav>
    <ul class="sidenav " id="mobile-demo">
      <span v-if="!isLoggedIn">
        <li>
          <router-link to="/register" class="spacing">SIGN-UP</router-link>
        </li>
        <li><router-link to="/login" class="spacing">LOGIN</router-link></li>
      </span>
      <span v-else>
        <li><router-link to="/" class="">DASHBOARD</router-link></li>
        <li><a @click="userLogOut" class="black-text spacing">LOGOUT</a></li>
      </span>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "navbar",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      //console.log(firebase.auth().currentUser);
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    userLogOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style>
.spacing {
  letter-spacing: 0.4rem;
}
</style>
