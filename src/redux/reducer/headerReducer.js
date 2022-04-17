import { SEARCH_BLUR, SEARCH_FOCUS, CHANGE_LIST } from "../constants";

const initState = {
    focused: false,
    homeList: []
};

export default (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case SEARCH_FOCUS:
            return { ...state, focused: true };
        case SEARCH_BLUR:
            return { ...state, focused: false };
        case CHANGE_LIST:
            console.log("action.data", action, action.data, action.data.success)
            return { ...state, homeList: action.data.data };

        default:
            return state;
    }
}