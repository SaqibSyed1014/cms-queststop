import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import attendance from "./modules/attendance";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    attendance,
  },
  plugins: [createPersistedState()],
});
