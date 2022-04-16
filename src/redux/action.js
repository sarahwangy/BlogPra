import store from "./store";
import { SEARCH_BLUR, SEARCH_FOCUS } from "./constants";
// action 是个函数，这样把data 当参数传进去，然后dispatch 把这个action 

export const createFocusedAction = () => ({ type: SEARCH_FOCUS })

export const createBlurAction = () => ({ type: SEARCH_BLUR })