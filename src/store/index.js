import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../service/api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   categories:[],
   services: [],
   formStep: [

   ]
  },
  mutations: {
   SET_CATEGORIES(state, categories){
     state.categories = categories;
    },

    SET_SERVICES(state, services){
      state.services = services;
     },

  },
  actions: {
    async loadCategories({commit}){
      let response = await Api.get('/categories');
      let categories = response.data
      commit('SET_CATEGORIES', categories );
     

  },
  async loadServices({commit}){
    let response = await Api.get('/categories');
    let services = response.data.map(v => v.services)
    commit('SET_SERVICES', services);
  
}
},
  getters: {
    
  },
  modules: {
  }
})
