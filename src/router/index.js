import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
//import Home from "@/components/Home";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import ForgotPassword from "@/views/auth/ForgotPassword";
import Employee from "@/components/Employee";
import AddEmployee from "@/components/AddEmployee";
import EditEmployee from "@/components/EditEmployee";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requireGuest: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requireGuest: true,
    },
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: ForgotPassword,
    meta: {
      requireGuest: true,
    },
  },
  {
    path: "/addnew",
    name: "add-employee",
    component: AddEmployee,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/:employee_id",
    name: "view-employee",
    component: Employee,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/edit/:employee_id",
    name: "edit-employee",
    component: EditEmployee,
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// Nav Guard
router.beforeEach((to, from, next) => {
  // check for Auth requirement
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth) {
    // check if user is authenticated
    if (!isAuthenticated) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      //proceed to route
      next();
    }
  } else if (requiresAuth) {
    // check if already logged in
    if (isAuthenticated) {
      // go to login
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      //procedd to route
      next();
    }
  } else {
    //procedd to route
    next();
  }
});
export default router;
