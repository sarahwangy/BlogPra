import { SEARCH_BLUR, SEARCH_FOCUS } from "./constants";

const initState = { focused: false };

export default (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case SEARCH_FOCUS:
            return { focused: true }
        case SEARCH_BLUR:
            return { focused: false }
        default:
            return state
    }


}