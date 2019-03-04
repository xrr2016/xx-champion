import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedTeam: null,
    renderText: ''
  },
  mutations: {
    setRenderText(state, text) {
      state.renderText = text
    }
  },
  actions: {}
})
