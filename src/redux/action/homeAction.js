import { CHANGE_HOME, ADD_MORE_LIST, CHANGE_SHOW_SCROLL } from "../constants";
import axios from "axios";


export const changeShowSroll = () => ({ type: CHANGE_SHOW_SCROLL })

export const changeHome = (data) => ({ type: CHANGE_HOME, data })

export const add_more_list = (data, articleListPage) => ({ type: ADD_MORE_LIST, data, articleListPage })

// 若后端没有开发好接口API的情况下，前端可以拟个 fake API 端口， 模拟 进行axios 请求数据。
export const GetHomeAction = () => {
    return (dispatch) => {
        console.log(123);
        axios.get('/api/home.json')
            .then((res) => {

                // 异步获取的数据 data 再dispatch 给reduce 
                dispatch(changeHome(res.data.data))
                console.log("res home data", res.data.data)

            }).catch(() => {
                console.log('error')
            })
    }
};


export const getMoreListAction = (articleListPage) => {
    console.log("click")
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + articleListPage)
            .then((res) => {

                // 异步获取的数据 data 再dispatch 给reduce 
                dispatch(add_more_list(res.data.data, articleListPage + 1))
                console.log("get more list_ data", res.data.data)

            }).catch((error) => {
                console.log(error)
            })
    }
}


