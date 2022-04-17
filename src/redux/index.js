import { combineReducers } from "redux";

import HeaderReducer from './reducer/headerReducer'
import homeReducer from './reducer/homeReducer'

const AllReducer = combineReducers({
    header: HeaderReducer,
    home: homeReducer
})

export default AllReducer