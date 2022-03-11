// let oddsofsurvival = {
//     "slim": "渺茫",
//     "grim": "严峻",
//     "none": "无",
// }
import list from "./listdata.json"
export default {
    title: "饥荒猜角色",
    list: list,
    searchByKey: true,
    chances: 3,
    properties: {
        hunger: {
            text:"饥饿",
            type: "number",
            parseText: (input) => {
                return input.toString()
            }
        },
        health: {
            text:"健康",
            type: "number",
            parseText: (input) => {
                return input.toString()
            }
        },
        sanity: {
            text:"精神",
            type: "number",
            parseText: (input) => {
                return input.toString()
            }
        },
        // oddsofsurvival: {
        //     text:"生存几率",
        //     type: "string",
        //     parseText: (input) => {
        //         return oddsofsurvival[input]
        //     }
        // },
        birthmonth: {
            text:"生日月份",
            type: "number",
            parseText: (input) => {
                return input.toString() + "月"
            }
        },
        birthdate: {
            text:"生日日期",
            type: "number",
            parseText: (input) => {
                return input.toString() + "日"
            }
        }
    }
}