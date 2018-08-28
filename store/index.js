import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      quote: "",
      author: ""
    },
    mutations: {
      add(state, payload) {
        state.quote = payload.quote;
        state.author = payload.author;
      }
    }
  })
}

export default createStore
