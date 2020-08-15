<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel white black-text center">
            <span class="register left">
              New here?
              <router-link :to="{ name: 'register' }">Sign-up</router-link>
            </span>
            <h3>Login</h3>
            <form @submit.prevent="userLogin">
              <div class="input-field">
                <i id="send-email" class="material-icons prefix">email</i>
                <input type="text" id="email" v-model="user.email" autocomplete="on" />
                <label class for="email">Email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="user.password" autocomplete="on" />
                <label class for="email">Password</label>
              </div>
              <button type="submit" class="btn-login btn btn-large btn-large black white-text">Login</button>
              <p class="forgot-password text-right">
                Forgot password ?
                <router-link :to="{ name: 'forgotpassword' }">Click to reset</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          alert(`Your are logged in as ${this.user.email}`);
          this.$router.push("/");
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  }
};
</script>

<style>
.btn-login {
  letter-spacing: 0.4rem;
}
</style>
