import { GET_LOGIN_DATA, LOGIN_OUT } from "../constants";


const initState = {
    login: false

};

export default (state = initState, action) => {
    console.log("reducer :", action.type)
    const { type } = action;
    switch (type) {
        case GET_LOGIN_DATA:
            console.log("login reducer", action)
            return { login: action.data }
        case LOGIN_OUT:
            return { login: action.data }

        default:
            return state;
    }
}