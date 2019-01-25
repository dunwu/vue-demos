import Vuex from 'vuex'
import account from './account'
import mutations from './mutations'
import setting from './setting'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    modules: {
      account,
      setting
    },
    mutations
  })
}

export default createStore
