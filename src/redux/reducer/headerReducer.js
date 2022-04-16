import { SEARCH_BLUR, SEARCH_FOCUS, CHANGE_LIST } from "../constants";

const initState = {
    focused: false,
    list: []
};

export default (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case SEARCH_FOCUS:
            return { focused: true };
        case SEARCH_BLUR:
            return { focused: false };
        case CHANGE_LIST:
            console.log("action.data", action, action.data, action.success)
            return { list: action.data };

        default:
            return state;
    }


}