<template>
  <div id="new-employee">
    <h3>Add new employee</h3>
    <div class="row white">
      <form @submit.prevent="saveEmployee" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="employee_id" required />
            <label>Employee ID</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
            <label>Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="email" required />
            <label>Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="dept" required />
            <label>Department</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="position" required />
            <label>Position</label>
          </div>
        </div>
        <button type="submit" class="btn submit">Submit</button>
        <router-link class="btn cancel grey darken-3" :to="{ name: 'home' }"
          >cancel</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "new-employee",
  data() {
    return {
      employee_id: "",
      email: "",
      name: "",
      dept: "",
      position: "",
    };
  },
  methods: {
    saveEmployee() {
      db.collection("employees")
        .add({
          employee_id: this.employee_id,
          name: this.name,
          email: this.email,
          dept: this.dept,
          position: this.position,
        })
        .then((docRef) => {
          console.log("Client added: ", docRef.id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error adding employee: ", error.message);
        });
    },
  },
};
</script>
<style scoped>
.cancel {
  margin-left: 0.5rem;
}
</style>
