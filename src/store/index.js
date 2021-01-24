import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {},
  modules: {}
});
