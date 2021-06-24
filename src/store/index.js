import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import attendance from "./modules/attendance";
import Profile from "@/views/Profile";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    attendance,
    Profile
  },
  plugins: [createPersistedState()],
});
