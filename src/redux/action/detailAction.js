import { GET_DETAIL_DATA } from "../constants";
import axios from "axios";

const getDetailData = (data) => ({ type: GET_DETAIL_DATA, data })

export const GetDetailAction = () => {
    return (dispatch) => {

        //         axios.get('/api/detail.json/?id={ id}')
        //  这里可以根据获得的ID，把ID 当后缀 放在API 后面，这样就可以读取相应的ID的 response data信息
        axios.get('/api/detail.json')
            .then((res) => {

                //  res 里面有2层data， so ， 传参数的时候要 res.data.data
                console.log('res_detail part', res)
                // 异步获取的数据 data 再dispatch 给reduce 
                dispatch(getDetailData(res.data.data))
                // console.log("res detail data", res.data.data)

            }).catch(() => {
                console.log('error')
            })
    }
};
