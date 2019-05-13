import Vuex from 'vuex'
import * as order from '@/store/modules/order.js'
const createStore = () => {
  return new Vuex.Store({
    modules: {
      order
    },
    state: () => ({
      drawer: true
    }),
    mutations: {
      toggleDrawer(state) {
        state.drawer = !state.drawer
      },
      drawer(state, val) {
        state.drawer = val
      }
    }
  })
}

export default createStore