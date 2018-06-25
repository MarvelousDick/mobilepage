const state = {
  userRight: null,
  root: process.env.API_ROOT
}

const mutations = {
  SET_USER_RIGHT(state, userRight) {
    state.userRight = userRight
  }
}

const actions = {
  getUserRight({commit, state}, urlParam) {
    // do something async
    axios({
      method: 'post',
      url: state.root + '/yfprod/getuserright',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data: urlParam
    }).then(function (response) {
      // globalVar.userRight = response.data
      let userRight = JSON.parse(response.data['user_right'])
      commit('SET_USER_RIGHT', userRight)
      // console.log(state.userRight)
    }).catch(function (error) {
      console.log(error)
    })

  }
}

export default {
  state,
  mutations,
  actions
}
