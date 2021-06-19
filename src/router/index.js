import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import Dashboard from "@/views/Dashboard";
import Login from "../views/Login";
import Attendance from "@/views/Attendance";
import Report from "@/views/Report";
import Register from "@/views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/Home",
        name: "Home",
        component: Home,
      },
      {
        path: "/attendance",
        name: "Attendance",
        component: Attendance,
      },
      {
        path: "/report",
        name: "Report",
        component: Report,
        // meta: { guest: true },
      },
    ]
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    // meta: { guest: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/posts",
    name: "Posts",
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/posts");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
