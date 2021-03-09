import { createStore } from 'vuex'

const store = createStore({
  state: {
    loading: false
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status
    }
  },
  actions: {},
  getters: {}
})

export default store
