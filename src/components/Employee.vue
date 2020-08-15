<template>
  <div id="employee">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ name.toUpperCase() }}</h4>
      </li>
      <li class="collection-item">Employee ID: {{ employee_id }}</li>
      <li class="collection-item">Email: {{ email }}</li>
      <li class="collection-item">Department: {{ dept }}</li>
      <li class="collection-item">Position: {{ position }}</li>
    </ul>
    <router-link to="/" class="btn grey darken-3">Back</router-link>
    <button @click="deleteEmployee" class="btn red delete">Delete</button>

    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{
          name: 'edit-employee',
          params: { employee_id: this.employee_id }
        }"
        class="btn-floating btn-large orange"
      >
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "view-employee",
  data() {
    return {
      employee_id: "",
      name: "",
      email: "",
      dept: "",
      position: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("employees")
      .where("employee_id", "==", to.params.employee_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.employee_id = doc.data().employee_id;
            vm.email = doc.data().email;
            console.log(doc.data());
            vm.name = doc.data().name;
            vm.dept = doc.data().dept;
            vm.position = doc.data().position;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("employees")
        .where("employee_id", "==", this.$route.params.employee_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.employee_id = doc.data().employee_id;
            this.name = doc.data().name;
            this.dept = doc.data().dept;
            this.position = doc.data().position;
          });
        });
    },
    deleteEmployee() {
      if (confirm("Are you sure?")) {
        db.collection("employees")
          .where("employee_id", "==", this.$route.params.employee_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.replace("/");
            });
          });
      }
    }
  }
};
</script>

<style scoped>
.delete {
  margin-left: 0.5rem;
}
</style>
