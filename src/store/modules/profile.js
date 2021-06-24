import axios from "axios";

const state = {

};

const getters = {

};

const actions = {
   async getUserDetails({commit}){
        //GET request
        await axios.get('');
       await commit('userDetails')
    }
};

const mutations = {
    userDetails(){

    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
