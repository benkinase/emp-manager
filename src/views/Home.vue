<template>
  <div id="home">
    <table class="highlight centered white">
      <thead>
        <h4>Employees</h4>
        <tr>
          <th>Department</th>
          <th>EmployeeSysID</th>
          <th>EmployeeID</th>
          <th>Name</th>
          <th>Profile</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.dept }}</td>
          <td>{{ employee.id }}</td>
          <td>{{ employee.employee_id }}</td>
          <td>{{ employee.name }}</td>
          <td style="margin-right:2px">
            <router-link
              class="secondary-content"
              v-bind:to="{
                name: 'view-employee',
                params: { employee_id: employee.employee_id },
              }"
              ><i class="fa fa-eye"></i
            ></router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="fixed-action-btn">
      <router-link to="/addnew" class="btn-floating btn-large green">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../firebaseInit";

export default {
  name: "home",
  components: {},
  data() {
    return {
      employees: [],
      loading: true,
    };
  },
  created() {
    db.collection("employees")
      .orderBy("dept")
      .get()
      .then((querySnapshot) => {
        this.loading = false;
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            employee_id: doc.data().employee_id,
            name: doc.data().name,
            dept: doc.data().dept,
            position: doc.data().position,
          };
          this.employees.push(data);
        });
      });
  },
};
</script>
