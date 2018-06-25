let productDetailClient = {
    ids: {id: 1, line_id: '801-15', rod_id: '58-010'},
    crow:
        {
            crow_est_rough_len: '235',
            crow_est_exact_len: '80',
            crow_date: '3月2日',
            crow_operator: '智绪召',
            crow_total_len: '270',
            crow_stick_len: '240',
            crow_mac_id: ''
        },
    cut:
        {
            cut_date: '3月2日',
            cut_operator: '智绪召',
            cut_len: '240',
            cut_pre_len: '',
            cut_bub_len: '',
            cut_cry_len: '',
            cut_crack: '',
            cut_crack_len: ''
        },
    rub:
        {
            rub_date: '3月2日',
            rub_operator: '翟业刚',
            rub_len: '0',
            roll_date: '3月2日',
            roll_operator: '丁亚奎',
            roll_len: '238'
        },
    roll:
        {
            of_date: '',
            of_operator: '',
            of_len: '',
            of_format: '58',
            of_collap: ''
        },
    of:
        {
            of_date: '',
            of_operator: '',
            of_len: '',
            of_format: '58',
            of_collap: ''
        },
    final:
        {
            final_bub: '79',
            final_crack: '2',
            final_date: '3月3日',
            final_total_len: '237.77',
            final_exact_len: '  '
        },
    add: {add_info: ''}
}

let productDetailClient2 = {
    crow: [
        {
            name: '掏棒',
            id: 'crow_est_rough_len',
            value: '235'
        },
        {
            name: '掏棒2',
            id: 'crow_est_exact_len',
            value: '80'
        },
    ],
    cut: [
        {
            name: '掏棒3',
            id: 'cut_daten',
            value: '235'
        },
        {
            name: '掏棒5',
            id: 'cut_operator',
            value: '235'
        }
    ],
    add: [
        {
            name: '掏棒6',
            id: 'add_info',
            value: '235'
        }
    ]
}

let prod = {
    "add_info": "",
    "crow_date": "3月2日",
    "crow_est_exact_len": "80",
    "crow_est_rough_len": "235",
    "crow_mac_id": "",
    "crow_operator": "智绪召",
    "crow_stick_len": "240",
    "crow_total_len": "270",
    "cut_bub_len": "",
    "cut_crack": "",
    "cut_crack_len": "",
    "cut_cry_len": "",
    "cut_date": "3月2日",
    "cut_len": "240",
    "cut_operator": "智绪召",
    "cut_pre_len": "",
    "final_bub": "79",
    "final_crack": "2",
    "final_date": "3月3日",
    "final_exact_len": "  ",
    "final_total_len": "237.77",
    "id": 1,
    "line_id": "801-15",
    "of_collap": "",
    "of_date": "",
    "of_format": "58",
    "of_len": "",
    "of_operator": "",
    "rod_id": "58-010",
    "roll_date": "3月2日",
    "roll_len": "238",
    "roll_operator": "丁亚奎",
    "rub_date": "3月2日",
    "rub_len": "0",
    "rub_operator": "翟业刚"
}

let userRight = {
    "add_info": null,
    "crow_date": null,
    "crow_est_exact_len": null,
    "crow_est_rough_len": null,
    "crow_mac_id": null,
    "crow_operator": null,
    "crow_stick_len": null,
    "crow_total_len": null,
    "cut_bub_len": null,
    "cut_crack": null,
    "cut_crack_len": null,
    "cut_cry_len": null,
    "cut_date": null,
    "cut_len": null,
    "cut_operator": null,
    "cut_pre_len": null,
    "final_bub": null,
    "final_crack": null,
    "final_date": null,
    "final_exact_len": null,
    "final_total_len": null,
    "id": "1",
    "id_in_table": 1,
    "line_id": "1",
    "of_collap": "1",
    "of_date": "1",
    "of_format": "1",
    "of_len": "1",
    "of_operator": "1",
    "rod_id": "1",
    "roll_date": null,
    "roll_len": null,
    "roll_operator": null,
    "rub_date": "1",
    "rub_len": "1",
    "rub_operator": "1",
    "user_id": "1",
    "user_name": "杨铖"
}

let processDetailNameTable = {
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
}

let formJson = {
    ids:
        [{id: 'line_id', name: '晶体号', value: '801-15', right: '1'},
            {id: 'rod_id', name: '晶棒号', value: '58-010', right: '1'}],
    crow: [],
    cut: [],
    rub:
        [{id: 'rub_date', name: '日期', value: '3月2日', right: '1'},
            {id: 'rub_len', name: '长度（mm)', value: '0', right: '1'},
            {id: 'rub_operator', name: '操作', value: '翟业刚', right: '1'}],
    roll: [],
    of:
        [{id: 'of_collap', name: '崩边（mm）', value: '', right: '1'},
            {id: 'of_date', name: '日期', value: '66666', right: '1'},
            {id: 'of_format', name: '规格', value: '58', right: '1'},
            {id: 'of_len', name: '长度', value: '', right: '1'},
            {id: 'of_operator', name: '操作', value: '', right: '1'}],
    final: [],
    add: []
}

function transformToClient(jsonFromServer) {

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

    for (let key in jsonFromServer) {
        let head = key.split("_", 1).toString()
        let singleJson = {}
        singleJson.id = key.toString()
        singleJson.name = processDetailNameTable[key]
        singleJson.value = jsonFromServer[key].toString()
        if (key == 'id') {

        } else if (key == 'line_id' | key == 'rod_id') {
            jsonTrans['ids'].push(singleJson)
        } else {
            jsonTrans[head].push(singleJson)
        }

    }
    console.log(jsonTrans)
}

// transformToClient(prod)

function transToFormJson(jsonFromServer, userRight) {
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

    for (let key in jsonFromServer) {
        let head = key.split("_", 1).toString()
        let singleJson = {}
        singleJson.id = key.toString()
        singleJson.name = processDetailNameTable[key]
        singleJson.value = jsonFromServer[key].toString()
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
    return jsonTrans
}

function formMergeToServerJson(formJson, serverJson) {
    for(let key in formJson){
        for (let index in formJson[key]){
            let item = formJson[key][index]
            // console.log(item)
            serverJson[item.id] = item.value
        }
    }
    return serverJson
}
// formMergeToServerJson(formJson, prod)
console.log(formMergeToServerJson(formJson, prod))