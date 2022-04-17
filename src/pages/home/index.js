import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { GetHomeAction, changeShowSroll } from '../../redux/action/homeAction'

// 只引入一个index 文件，然后 把之前暴露的 export的都 解析出来。。使用
import { Topic, Write, Recommend, HomeList } from '../../components/homeComponent/index'


// import Recommend from '../../components/homeComponent/recommend'
// import Topic from '../../components/homeComponent/topic'
// import Write from '../../components/homeComponent/write'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './styled'
// import HomeList from '../../components/homeComponent/homeList'

class Home extends PureComponent {

    handleScrollTop = () => {
        window.scrollTo(0, 0);
    }

    bindEvent = () => {
        window.addEventListener('scroll', this.props.changeShowSroll)
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
                    <Write />
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }

            </HomeWrapper>

        )
    }
}

// ??? container home 里面不用获取state吗，还是说谁用谁自己获取，反正大家都用connect了， home用哪个state，就只取哪个state？

const mapStateToProps = (state) => ({
    // articleList: state.home.articleList,
    // topicList: state.home.topicList,
    // recommendList: state.home.recommendList
    showScroll: state.home.showScroll
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeList: dispatch(GetHomeAction()),
        // 回到顶部，/???
        changeShowSroll: () => {
            console.log("scrolll--->", document.documentElement.showScroll)
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

