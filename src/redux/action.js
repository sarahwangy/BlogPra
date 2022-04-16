import store from "./store";
import { SEARCH_BLUR, SEARCH_FOCUS, CHANGE_LIST } from "./constants";
import axios from "axios";


// action 是个函数，这样把data 当参数传进去，然后dispatch 把这个action 
// action 是个函数，返回的是个object 对象

export const createFocusedAction = () => ({ type: SEARCH_FOCUS })

export const createBlurAction = () => ({ type: SEARCH_BLUR })

export const changeList = (data) => ({ type: CHANGE_LIST, data })

// 若后端没有开发好接口API的情况下，前端可以拟个 fake API 端口， 模拟 进行axios 请求数据。
export const GetListAction = () => {
    return (dispatch) => {
        console.log(123);
        axios.get('/api/headerList.json')
            .then((res) => {
                // const action = {
                //     type: 'change_list',
                //     data: res.data
                // }

                // 异步获取的数据 data 再dispatch 给reduce 
                dispatch(changeList(res.data))
                // console.log(res.data)

            }).catch(() => {
                console.log('error')
            })
    }
};