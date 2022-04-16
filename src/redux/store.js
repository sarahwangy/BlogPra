import { createStore, applyMiddleware } from "redux";
import AllReducer from "./index";
import thunk from "redux-thunk";

const store = createStore(AllReducer, applyMiddleware(thunk));
export default store;