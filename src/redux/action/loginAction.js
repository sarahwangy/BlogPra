

import { GET_LOGIN_DATA, LOGIN_OUT } from "../constants";
import axios from "axios";

// 改变login out 的 login 状态
export const createLoginOut = () => ({ type: LOGIN_OUT, data: false })



const getLoginData = (data) => {
    console.log("==========getLoginData:")
    return { type: GET_LOGIN_DATA, data }
}

export const getLoginAction = (account, password) => {
    console.log("getLoginAction: ")
    return (dispatch) => {

        // ??? w为什么这种写法不行？？
        console.log(JSON.stringify(account))
        console.log(JSON.stringify(password))
        // axios.get(`/api/login.json?account=${account}password=${password}`)
        axios.get('/api/login.json?account=' + account + '&password=' + password)
            .then((res) => {

                //  res 里面有2层data， so ， 传参数的时候要 res.data.data
                console.log('res_login part 登录成功', res)
                // 异步获取的数据 data 再dispatch 给reduce 
                dispatch(getLoginData(res.data.data))
                // console.log("res detail data", res.data.data)

            }).catch((error) => {
                console.log(error)
            })
    }
};


