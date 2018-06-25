const state = {
  jssdkInfo: null,
  serverRoot: process.env.API_ROOT
}

const mutations = {
  GETJSSDK_INFO(state, jssdkInfo) {
    state.jssdkInfo = jssdkInfo
  }
}

const actions = {
  getJssdkFromServer({commit, state}) {
    // do something async
    console.log(state.serverRoot)
    let param = new URLSearchParams()
    param.append("url", window.location.href.split('#')[0])
    axios({
      method: 'post',
      url: state.serverRoot + '/yfjssdk/scanapi',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      data: param
    }).then(function (response) {
      console.log(response.data)
      commit('GETJSSDK_INFO', response.data)
      console.log(state.jssdkInfo)
      // self.state.jssdkInfo = response.data
      wx.config({
        beta: true,
        debug: false,
        appId: state.jssdkInfo.appId,
        timestamp: state.jssdkInfo.timestamp,
        nonceStr: state.jssdkInfo.nonceStr,
        signature: state.jssdkInfo.signature,
        jsApiList: [
          'downloadImage',
          'getNetworkType',
          'openLocation',
          'getLocation',
          'closeWindow',
          'scanQRCode',
          'chooseWXPay',
          'openProductSpecificView',
          'addCard',
          'chooseCard',
          'openCard'
        ]
      })
    }).catch(function (error) {
      console.log(error)
    })

    setInterval(function () {
        let param = new URLSearchParams()
        param.append("url", window.location.href.split('#')[0])
        axios({
          method: 'post',
          url: state.serverRoot + '/yfjssdk/scanapi',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          data: param
        }).then(function (response) {
          console.log(response.data)
          commit('GETJSSDK_INFO', response.data)
          wx.config({
            beta: true,
            debug: false,
            appId: state.jssdkInfo.appId,
            timestamp: state.jssdkInfo.timestamp,
            nonceStr: state.jssdkInfo.nonceStr,
            signature: state.jssdkInfo.signature,
            jsApiList: [
              'downloadImage',
              'getNetworkType',
              'openLocation',
              'getLocation',
              'closeWindow',
              'scanQRCode',
              'chooseWXPay',
              'openProductSpecificView',
              'addCard',
              'chooseCard',
              'openCard'
            ]
          })

        }).catch(function (error) {
          console.log(error)
        })

      }, 2000000
    )
  }

}

export default {
  state,
  mutations,
  actions
}
