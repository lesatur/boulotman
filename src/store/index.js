import Vue from 'vue'
import Vuex from 'vuex'
import data from '../service/service.json'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   categories:[],
   services:[],
   questionHelper:[],
  
  },
  mutations: {
   SET_CATEGORIES(state, categories){
     state.categories = categories;
    },

     SET_ALL_SERVICES(state, services){
      state.services = services;
     },
     QUESTION_HELPER(state, questions){
      state.questions = questions;
     },

  },
  getters:{
    subServiceDataOfService: state => id => {
      return state.services.find(key => key.name == id);
    }
  },
  actions: {
  async loadCategories({commit}){
    commit('SET_ALL_SERVICES', data)
  },

}
})
