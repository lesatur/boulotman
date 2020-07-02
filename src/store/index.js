import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../service/api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   categories:[],
   allservices:[],
   questionHelper:[],
  
  },
  mutations: {
   SET_CATEGORIES(state, categories){
     state.categories = categories;
    },

     SET_ALL_SERVICES(state, allservices){
      state.allservices = allservices;
     },
     QUESTION_HELPER(state, questions){
      state.questions = questions;
     },

  },
  actions: {
    async loadCategories({commit}){
      let response = await Api.get('/categories');
      let categories = response.data;
      let services = categories
      
    

      commit('SET_CATEGORIES', categories )
      commit('SET_SERVICES', services )
    
     
  },
  async loadAllServices({commit}){
    let response = await Api.get('/services');
    let allservices = response.data
    commit('SET_ALL_SERVICES', allservices )
  
},

},
  
getTodoById: (state) => (id) => {
  return state.categories.find(todo => todo.id === id)},


  modules: {
  }
})
