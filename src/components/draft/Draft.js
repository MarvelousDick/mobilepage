let test = {
    data: {
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
}

function getDateNow() {
    let nowDate = new Date()
    return nowDate.getFullYear() + '-' + nowDate.getMonth() + '-' + nowDate.getDate()
}

function transformProdDetail(res) {

    let dataFromServer = res.data
    let transformedData = {
        ids: '666',
        crow: null,
        cut: null,
        rub: null,
        roll: null,
        of: null,
        final: null,
        add: null
    }

    transformedData.ids = {
        id: dataFromServer.id,
        line_id: dataFromServer.line_id,
        rod_id: dataFromServer.rod_id
    }

    transformedData.crow = {
        crow_est_rough_len: dataFromServer.crow_est_rough_len,
        crow_est_exact_len: dataFromServer.crow_est_exact_len,
        crow_date: dataFromServer.crow_date,
        crow_operator: dataFromServer.crow_operator,
        crow_total_len: dataFromServer.crow_total_len,
        crow_stick_len: dataFromServer.crow_stick_len,
        crow_mac_id: dataFromServer.crow_mac_id
    }

    transformedData.cut = {
        cut_date: dataFromServer.cut_date,
        cut_operator: dataFromServer.cut_operator,
        cut_len: dataFromServer.cut_len,
        cut_pre_len: dataFromServer.cut_pre_len,
        cut_bub_len: dataFromServer.cut_bub_len,
        cut_cry_len: dataFromServer.cut_cry_len,
        cut_crack: dataFromServer.cut_crack,
        cut_crack_len: dataFromServer.cut_crack_len
    }

    transformedData.rub = {
        rub_date: dataFromServer.rub_date,
        rub_operator: dataFromServer.rub_operator,
        rub_len: dataFromServer.rub_len,
        roll_date: dataFromServer.roll_date,
        roll_operator: dataFromServer.roll_operator,
        roll_len: dataFromServer.roll_len
    }

    transformedData.roll = {
        of_date: dataFromServer.of_date,
        of_operator: dataFromServer.of_operator,
        of_len: dataFromServer.of_len,
        of_format: dataFromServer.of_format,
        of_collap: dataFromServer.of_collap
    }

    transformedData.of = {
        of_date: dataFromServer.of_date,
        of_operator: dataFromServer.of_operator,
        of_len: dataFromServer.of_len,
        of_format: dataFromServer.of_format,
        of_collap: dataFromServer.of_collap
    }

    transformedData.final = {
        final_bub: dataFromServer.final_bub,
        final_crack: dataFromServer.final_crack,
        final_date: dataFromServer.final_date,
        final_total_len: dataFromServer.final_total_len,
        final_exact_len: dataFromServer.final_exact_len
    }

    transformedData.add = {
        add_info: dataFromServer.add_info
    }

    console.log(transformedData)
    // console.log(presentDate)
    return transformedData
}

transformProdDetail(test)