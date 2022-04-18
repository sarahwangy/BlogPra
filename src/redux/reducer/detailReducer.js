import { GET_DETAIL_DATA } from "../constants";

const initState = {
    title: '',
    content: ' '

};

export default (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case GET_DETAIL_DATA:
            console.log("detail_actioin", action)

            return {
                title: action.data.title,
                content: action.data.content
            }

        default:
            return state;
    }
}