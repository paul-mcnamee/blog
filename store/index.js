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
      },
      quote(state, payload) {
        state.quote = payload;
      },
      author(state, payload) {
        state.author = payload;
      }
    },
    getters: {
      quoteExists: state => {
        return state.quote.length > 0
      }
    }
  });
}

export default createStore
