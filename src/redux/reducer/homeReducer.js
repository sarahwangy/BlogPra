import { CHANGE_HOME, ADD_MORE_LIST, CHANGE_SHOW_SCROLL } from "../constants";

//  可以在 reduce 里面同时定义多个 init state 值，但是在不同的子组件里面，可以只获取自己需要的state值，不用每个都获取
// 如 topic 子组件里面，可以连接connect之后，只获取自己需要的topiclist state，然后 action，reduce 更改 topiclist，用 。。。state，表示其他的不改
const initState = {
    topicList: [],
    articleList: [],
    recommendList: [],
    articleListPage: 1,
    showScroll: false
};

export default (state = initState, action) => {
    const { type } = action;
    switch (type) {
        case CHANGE_HOME:
            console.log("home actioin", action.data)

            // 用 。。。state，表示其他的不改， 改的值，列出来。
            return {
                ...state,
                topicList: action.data.topicList,
                articleList: action.data.articleList,
                recommendList: action.data.recommendList
            }
        case ADD_MORE_LIST:

            // 打 log的时候，不仅要放对地方，而且还有用 JSON stryfing 解析，如果是数组的话，object之类的
            // console.log('add more list --->', JSON.stringify(action.data))
            return {
                ...state, articleList: [...state.articleList, ...action.data],
                articleListPage: action.articleListPage
            }
        case CHANGE_SHOW_SCROLL:
            return { ...state, showScroll: true }
        default:
            return state;
    }
}