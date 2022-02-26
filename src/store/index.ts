import { createStore } from 'vuex'

export default createStore({
  state: {
    messe: "じゃじゃj",
    counter: 0,
    arr: ["o", "2", "jj"],
    isFirstTime: true,
    // ActionContext<{ messe: string; counter: number; arr: string[]; }, { messe: string; counter: number; arr: string[]; }>
  },
  mutations: {
    inc(state) {
      // state.masse = state.counter
    },
    incdes(state){
      console.log("aa")
      state.arr.push("ee")
      // state.counter = state.messe
    }
  },
  getters: {
    arr(state) {
      return state.arr.length
    }
  },
  actions: {
    incdes(state){
      console.log("aa")
      // state.counter++;
      state.commit('incdes')
    },
    incs(state) {
      
      state.commit('incs')
    }
  },
  modules: {
  }
})
