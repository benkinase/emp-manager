<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel white black-text center">
            <h3>Signup</h3>
            <form @submit.prevent="userRegistration">
              <div class="input-field">
                <i id="send-email" class="material-icons prefix"></i>
                <input type="text" id="name" v-model="user.name" autocomplete="on" />
                <label class for="name">Name</label>
              </div>
              <div class="input-field">
                <i id="send-email" class="material-icons prefix">email</i>
                <input type="text" id="email" v-model="user.email" autocomplete="on" />
                <label class for="email">Email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">https</i>
                <input type="password" id="password" v-model="user.password" autocomplete="on" />
                <label class for="email">Password</label>
              </div>
              <button type="submit" class="btn-register btn btn-large black white-text">Register</button>
              <p class="forgot-password text-right">
                Already registered?
                <router-link :to="{ name: 'login' }">Login</router-link>
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
  name: "register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(res => {
          res.user;

          alert(`Account created for ${this.user.email}`);
          this.$router.push("/login");
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak");
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
.btn-register {
  letter-spacing: 0.4rem;
}
</style>
