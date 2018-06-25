const state = {
  root: process.env.API_ROOT
}


const getters = {
  getRoot: state => {
    return state.root
  }
}

const mutations = {
  DECREMENT_MAIN_COUNTER(state) {

  },
  INCREMENT_MAIN_COUNTER(state) {

  }
}

const actions = {
  someAsyncTask({commit}) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}


export default {
  getters,
  state,
  mutations,
  actions
}
