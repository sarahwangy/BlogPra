import { } from "../constants";

const initState = {
    title: '一片阳光',
    content: '< p > 接连几天都是晴空万里, 阳光明媚, 看上去温暖和煦 </p>'

};

export default (state = initState, action) => {
    const { type } = action;
    switch (type) {

        default:
            return state;
    }
}