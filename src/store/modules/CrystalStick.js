const state = {
  productDetailClient: null,
  productDetailServer: null,
  processNameTable: {
    ids: '序号',
    crow: '掏棒',
    cut: '锯床去头尾',
    rub: '平磨',
    roll: '滚磨',
    of: 'OF 面',
    final: '终检',
    add: '补充信息'
  },
  productFormJson: null,
  processDetailNameTable: {
    id: "编号",
    line_id: "晶体号",
    rod_id: "晶棒号",
    crow_est_rough_len: "评估毛长",
    crow_est_exact_len: "评估净长",
    crow_date: "日期",
    crow_operator: "操作",
    crow_total_len: "总长（mm）",
    crow_stick_len: "掏棒长度",
    crow_mac_id: "机台号",
    cut_date: "日期",
    cut_operator: "操作",
    cut_len: "长度（mm)",
    cut_pre_len: "返工前长度",
    cut_bub_len: "气泡（mm)",
    cut_cry_len: "晶界（mm)",
    cut_crack: "开裂",
    cut_crack_len: "裂纹（mm)",
    rub_date: "日期",
    rub_operator: "操作",
    rub_len: "长度（mm)",
    roll_date: "日期",
    roll_operator: "操作",
    roll_len: "长度",
    of_date: "日期",
    of_operator: "操作",
    of_len: "长度",
    of_format: "规格",
    of_collap: "崩边（mm）",
    final_bub: "气泡",
    final_crack: "开裂",
    final_date: "日期",
    final_total_len: "总长（mm）",
    final_exact_len: "净长（mm）",
    add_info: "备注"
  },
  productCode: null,
  root: process.env.API_ROOT
}

const mutations = {
  SET_productDetailClient(state, productDetailClient) {
    state.productDetailClient = productDetailClient
  },

  SET_productDetailServer(state, productDetailServer) {
    state.productDetailServer = productDetailServer
  },

  SET_processNameTable(state, processNameTable) {
    state.processNameTable = processNameTable
  },

  SET_productFormJson(state, productFormJson) {
    state.productFormJson = productFormJson
  },

  SET_processDetailNameTable(state, processDetailNameTable) {
    state.processDetailNameTable = processDetailNameTable
  },

  SET_productCode(state, productCode){
    state.productCode = productCode
  },

  transformToClient(state) {
    let jsonTrans = {
      ids: [],
      crow: [],
      cut: [],
      rub: [],
      roll: [],
      of: [],
      final: [],
      add: []
    }

    for (let key in state.productDetailServer) {
      let head = key.split("_", 1).toString()
      let singleJson = {}
      singleJson.id = key.toString()
      singleJson.name = state.processDetailNameTable[key]
      singleJson.value = state.productDetailServer[key].toString()
      if (key == 'id') {
        continue
      } else if (key == 'line_id' | key == 'rod_id') {
        jsonTrans['ids'].push(singleJson)
      } else {
        jsonTrans[head].push(singleJson)
      }

    }
    state.productDetailClient = jsonTrans
    console.log(state.productDetailClient)
  },

  transToFormJson(state, userRight) {
    let jsonTrans = {
      ids: [],
      crow: [],
      cut: [],
      rub: [],
      roll: [],
      of: [],
      final: [],
      add: []
    }

    for (let key in state.productDetailServer) {
      let head = key.split("_", 1).toString()
      let singleJson = {}
      singleJson.id = key.toString()
      singleJson.name = state.processDetailNameTable[key]
      singleJson.value = state.productDetailServer[key].toString()
      if (userRight[key] != null) {
        singleJson.right = userRight[key]
        if (key == 'id') {
          continue
        } else if (key == 'line_id' | key == 'rod_id') {
          jsonTrans['ids'].push(singleJson)
        } else {
          jsonTrans[head].push(singleJson)
        }
      }
    }
    state.productFormJson = jsonTrans
  },


  formMergeServerJson(state) {
    for (let key in state.productFormJson) {
      for (let index in state.productFormJson[key]) {
        let item = state.productFormJson[key][index]
        // console.log(item)
        state.productDetailServer[item.id] = item.value
      }
    }

  }

}

const actions = {}


export default {
  state,
  mutations,
  actions
}
