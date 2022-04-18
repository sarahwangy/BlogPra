import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { GetHomeAction, changeShowSroll } from '../../redux/action/homeAction'

// 只引入一个index 文件，然后 把之前暴露的 export的都 解析出来。。使用
import { Topic, Write, Recommend, HomeList } from '../../components/homeComponent/index'


// import Recommend from '../../components/homeComponent/recommend'
// import Topic from '../../components/homeComponent/topic'
// import Write from '../../components/homeComponent/write'
import { HomeWrapper, HomeLeft, HomeRight, BackTop, WriteWrapper } from './styled'
// import HomeList from '../../components/homeComponent/homeList'


class Home extends PureComponent {

    handleScrollTop = () => {
        window.scrollTo(0, 0);
    }

    //  绑定事件， 监听 scroll， 用户是否开始 scroll页面
    bindEvent = () => {
        window.addEventListener('scroll', this.props.changeShowSroll)
    }


    //  componentDid Mount 挂载的时候调用 bindEvent, this event 直接监听 changesroll方法
    //  立马加载，但是用户没有scroll 情况下，也不会立马执行这个钩子
    componentDidMount() {
        this.bindEvent();

        // 借助 redux dev tool 查看 state 状态，哪些获取了，哪些没有获取。。
        //  如果没有其他按钮绑定 这个axios 调取数据的话，可以用 componentdidmount 调取changelist 方发
        this.props.changeHomeList();

    }


    //  取消监听事件：

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeShowSroll)
    }


    render() {
        return (

            <HomeWrapper >
                <HomeLeft >
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <Topic />
                    <HomeList />
                </HomeLeft>

                <HomeRight>
                    <Recommend />
                    <WriteWrapper>
                        <Write />
                    </WriteWrapper>

                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }

                {/* 可以用按钮 绑定事件，但是这样有点多余，用户滑到 比较多的时候，页面可以scroll 的时候，生命周期钩子 自动使 回到顶部 出现，用户点击 回到顶部，直接回到最上面 top*/}
                {/* <button onClick={this.bindEvent}> click </button> */}
            </HomeWrapper>


        )
    }
}

//container home 里面不用获取state吗，谁用谁自己获取，反正大家都用connect了， home用哪个state，就只取哪个state？

const mapStateToProps = (state) => ({
    // articleList: state.home.articleList,
    // topicList: state.home.topicList,
    // recommendList: state.home.recommendList
    showScroll: state.home.showScroll
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeList: () => dispatch(GetHomeAction()),
        // 回到顶部，/???
        // changeShowSroll: () => {
        //     console.log("scrolll--->", document.documentElement.scrollTop)

        // }
        changeShowSroll: () => {

            //  打 log 排查 错误 - 是否目前scroll 大于400
            console.log("scrolll--->", document.documentElement.scrollTop)
            //判断是否 是 TRUE值，是TRUE的话，执行那个dispatch。。。
            console.log(document.documentElement.scrollTop > 400)

            if (document.documentElement.scrollTop > 400) {
                dispatch(changeShowSroll(true))
            } else {
                dispatch(changeShowSroll(false))
            }
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

