import { combineReducers } from "redux";

import HeaderReducer from './reducer/headerReducer'
import homeReducer from './reducer/homeReducer'
import DetailReducer from './reducer/detailReducer'
import LoginReducer from './reducer/loginReducer'

const AllReducer = combineReducers({
    header: HeaderReducer,
    home: homeReducer,
    detail: DetailReducer,
    login: LoginReducer
})

export default AllReducer