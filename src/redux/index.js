import { combineReducers } from "redux";

import HeaderReducer from './reducer/headerReducer'

const AllReducer = combineReducers({
    header: HeaderReducer
})

export default AllReducer