<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel white black-text center">
          <form @submit.prevent="forgetPassword">
            <h4>Reset Password</h4>

            <div class="input-field">
              <label for="email">Email</label>
              <input type="email" v-model="user.email" id="email" autocomplete="on" />
            </div>

            <button type="submit" class="btn btn-large grey lighten-3 btn-forgot">Send request</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "forgotpassword",
  data() {
    return {
      user: {
        email: ""
      }
    };
  },
  methods: {
    forgetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert("Check your registered email to reset the password!");
          this.user = {
            email: ""
          };
          this.$router.replace({ name: "login" });
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>
<style>
.btn-forgot {
  letter-spacing: 0.4rem;
  border: 3px solid black;
  font-weight: 700;
  color: black;
}
</style>
