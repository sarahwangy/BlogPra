import { combineReducers } from "redux";

import HeaderReducer from './reducer/headerReducer'
import homeReducer from './reducer/homeReducer'
import DetailReducer from './reducer/detailReducer'

const AllReducer = combineReducers({
    header: HeaderReducer,
    home: homeReducer,
    detail: DetailReducer
})

export default AllReducer