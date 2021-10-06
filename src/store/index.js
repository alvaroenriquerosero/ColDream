import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    docentes: []
  },
  mutations: {
    steUsers(state, payload){
      state.docentes = payload;
    }
  },
  actions: {
    async getUsers({commit}){
      const peticion = fetch('mongodb+srv://tarkian20:Alastor66246@cdappdb.cmkad.mongodb.net/data/docentes');
      const data = await (await peticion).json();
      console.log(data);
      commit ('setDocentes', data);
    }
  },
  modules: {
  }
})
