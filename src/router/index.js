import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Profile from "../views/Profile.vue";
import Dashboard from "@/views/Dashboard";
import Login from "../views/Login";
import Attendance from "@/views/Attendance";
import AttendanceRecord from "@/views/AttendanceRecord";
import MeetingRecord from "@/views/MeetingRecord";
import Warnings from "@/views/Warnings";
import Logs from "@/views/Logs";
import Register from "@/views/Register";
import ApplyForLeave from "@/views/ApplyForLeave";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/attendance",
        name: "Attendance",
        component: Attendance,
      },
      {
        path: "/attendance-record",
        name: "Attendance Record",
        component: AttendanceRecord,
      },
      {
        path: "/meeting-record",
        name: "Meeting Record",
        component: MeetingRecord,
      },
      {
        path: "/warnings",
        name: "Warning",
        component: Warnings,
      },
      {
        path: "/logs",
        name: "Logs",
        component: Logs,
      },
      // {
      //   path: "/logs",
      //   name: "Logs",
      //   component: Logs,
      //   // meta: { guest: true },
      // },
      {
        path: "/apply-for-leave",
        name: "Leave",
        component: ApplyForLeave,
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
    // meta: { requiresAuth: true },
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
