import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import {
    HeaderWrapper, SearchWrapper, BarSearchWrapper,
    RightSpanWrapper, Logo, Nav, NavItem, NavSearch, Addition,
    Button, SearchInfoList, SearchInfoTitle, SearchInfoSwitch,
    SearchInfoItems, SearchDiv
} from './style'

import { BsSearch, BsPencilSquare, BsGem, BsLink } from "react-icons/bs"
import { connect } from 'react-redux'
import { createFocusedAction, createBlurAction, GetListAction } from '../../redux/action/action'
import { createLoginOut } from '../../redux/action/loginAction'


// 没有redux 的时候，写法
// ------------------------------------------------------
// export default class Header extends Component {
//     state = { focused: false }

//     handleInputFocus = () => {
//         this.setState({ focused: true })

//     }

//     handleInputBlur = () => {
//         this.setState(
//             () => ({ focused: false }),

//             // 可以打印看看之前的状态，和setstate之后的状态。。。异步函数
//             () => (console.log("state", this.state)),
//             console.log("state_1", this.state))
//     }

//     render() {
//         return (

//             <div>

//                 <HeaderWrapper>
//                     <Logo />
//                     <Nav>
//                         <NavItem className='left active'> 首页</NavItem>
//                         <NavItem className='left '> 下载APP</NavItem>
//                         <NavItem className='right active'> 登陆</NavItem>
//                         <NavItem className='right'> Aa</NavItem>
//                         <SearchWrapper>

//                             <CSSTransition
//                                 in={this.state.focused}
//                                 timeout={200}
//                                 classNames='slide'
//                             >
//                                 <NavSearch className={this.state.focused ? 'focused' : ' '}
//                                     onFocus={this.handleInputFocus}
//                                     onBlur={this.handleInputBlur}>
//                                 </NavSearch>
//                             </CSSTransition>

//                             <BarSearchWrapper className={this.state.focused ? 'focused' : ' '}>
//                                 <BsSearch size={20} />
//                             </BarSearchWrapper>
//                         </SearchWrapper>

//                     </Nav>
//                     <Addition>
//                         <Button className='writting'>
//                             <RightSpanWrapper>
//                                 <BsPencilSquare size={18} />
//                             </RightSpanWrapper> 写文章
//                         </Button>
//                         <Button className='reg'>注册</Button>


//                     </Addition>
//                 </HeaderWrapper >
//             </div>
//         )
//     }
// }


//  redux 交互的时候写法
// ----------------------------------------------------------------
//  把class组件换成 function 无状态 组件，这样性能比较高， 写成function 组件后，this.props，变成了props

// 隐藏部分 的函数控制, 自己组件用的函数 而且不需要改变 state 状态，可以写在function 组件外面，这样内部组件可以直接调用
//  不需要从redux store 获取 函数。

// const getListArea = (show) => {
//     if (show) {
//         console.log("show", show);
//         return (

//             <SearchInfoList>

//                 <SearchInfoTitle>
//                     热门搜索
//                     <SearchInfoSwitch>
//                         <BsGem size={12} />  换一换
//                     </SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <div>
//                     <SearchDiv>
//                         <SearchInfoItems>教育</SearchInfoItems>
//                         <SearchInfoItems>旅游</SearchInfoItems>
//                         <SearchInfoItems>生活</SearchInfoItems>
//                         <SearchInfoItems>学习</SearchInfoItems>
//                         <SearchInfoItems>放松</SearchInfoItems>
//                         <SearchInfoItems>学习</SearchInfoItems>
//                         <SearchInfoItems>放松</SearchInfoItems>
//                         <SearchInfoItems>教育</SearchInfoItems>
//                         <SearchInfoItems>旅游</SearchInfoItems>
//                         <SearchInfoItems>生活</SearchInfoItems>

//                     </SearchDiv>

//                 </div>
//             </SearchInfoList>


//         )
//     } else {
//         return null;
//     }

// }




// const Header = (props) => {
//     return (

//         <div>

//             <HeaderWrapper>
//                 <Logo />
//                 <Nav>
//                     <NavItem className='left active'> 首页</NavItem>
//                     <NavItem className='left '> 下载APP</NavItem>
//                     <NavItem className='right active'> 登陆</NavItem>
//                     <NavItem className='right'> Aa</NavItem>

//                     {/* 搜索🔍 部分 */}
//                     <SearchWrapper>

//                         <CSSTransition
//                             in={props.focused}
//                             timeout={200}
//                             classNames='slide'>
//                             <NavSearch className={props.focused ? 'focused' : ' '}
//                                 onFocus={props.handleInputFocus}
//                                 onBlur={props.handleInputBlur}>
//                             </NavSearch>
//                         </CSSTransition>

//                         <BarSearchWrapper className={props.focused ? 'focused' : ' '}>
//                             <BsSearch size={20} />

//                             {/* 隐藏部分list */}
//                             {getListArea(props.focused)}

//                         </BarSearchWrapper>
//                     </SearchWrapper>

//                 </Nav>
//                 <Addition>
//                     <Button className='writting'>
//                         <RightSpanWrapper>
//                             <BsPencilSquare size={18} />
//                         </RightSpanWrapper> 写文章
//                     </Button>
//                     <Button className='reg'>注册</Button>

//                 </Addition>
//             </HeaderWrapper >
//         </div>
//     )
// }



// 换成class 组件，再次进行扩展

// --------------------------------------------------------------------

class Header extends PureComponent {


    getListArea = () => {
        if (this.props.focused) {
            console.log("show", this.props);
            return (

                <SearchInfoList >

                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            <BsGem size={12} />  换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        <SearchDiv>
                            {
                                this.props.list.map((listObj) => {
                                    return <SearchInfoItems key={listObj}>{listObj}</SearchInfoItems>

                                })
                            }
                        </SearchDiv>
                    </div>
                </SearchInfoList>
            )
        } else {
            return null;
        }
    }

    render() {
        console.log(this.props);
        console.log("header_login_props", this.props.login)

        return (
            <div>
                <HeaderWrapper>
                    <Link to='/'>
                        <Logo />
                    </Link>

                    <Nav>
                        <NavItem className='left active'>
                            <Link to='/'>
                                首页
                            </Link>
                        </NavItem>
                        <NavItem className='left '> 下载APP</NavItem>
                        {
                            this.props.login ?
                                <NavItem onClick={this.props.loginOut} className='right'>退出</NavItem> :
                                <Link to='/login'> <NavItem className='right active'> 登陆</NavItem></Link>
                        }


                        <NavItem className='right'> Aa</NavItem>

                        {/* 搜索🔍 部分 */}
                        <SearchWrapper>

                            <CSSTransition
                                in={this.props.focused}
                                timeout={200}
                                classNames='slide'>
                                <NavSearch className={this.props.focused ? 'focused' : ' '}
                                    onFocus={this.props.handleInputFocus}
                                    onBlur={this.props.handleInputBlur}>
                                </NavSearch>
                            </CSSTransition>

                            <BarSearchWrapper className={this.props.focused ? 'focused' : ' '}>
                                <BsSearch size={20} />

                                {/* 隐藏部分list */}
                                {this.getListArea()}

                            </BarSearchWrapper>
                        </SearchWrapper>

                    </Nav>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writting'>
                                <RightSpanWrapper>
                                    <BsPencilSquare size={18} />
                                </RightSpanWrapper> 写文章
                            </Button>
                        </Link>
                        <Button className='reg'>注册</Button>

                    </Addition>
                </HeaderWrapper >
            </div>
        )
    }

}




//  这里需要后期把page，totalpage 方法，加上去！！！！！！ ===》待做！！

const mapStateToProps = (state) => {
    return {
        // 获取整体state的focus，取名focused，这样 子组件 header就可以用了。
        focused: state.header.focused,
        list: state.header.homeList,
        page: state.header.page,
        totalPage: state.header.totalPage,
        mouseIn: state.header.mouseIn,

        // 可以获取其他组件 储存在 state 的状态，这里header 组件获取 login 的login 状态
        login: state.login.login
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleInputFocus() {
//             const action = {
//                 type: 'search_focus'
//             };
//             dispatch(action)
//         },
//         handleInputBlur() {
//             const action = {
//                 type: 'search_blur'
//             };
//             dispatch(action)
//         }

//     }

// }


const mapDispatchToProps = (dispatch) => {
    return {
        // action 这里要是一个运行的函数 createFocusedAction()， 不是createFocusedAction，
        // 这样dispatch会把 action 里面return的type data 传给reduce，所以必须是个运行的函数。加括号（）
        handleInputFocus: () => {
            dispatch(GetListAction());
            dispatch(createFocusedAction());

        },
        handleInputBlur: () => dispatch(createBlurAction()),

        //  loginout action 为了格式统一，好寻找，统一写在了 login action文件里面，处理的话，也在login reduce 里处理
        //  header组件不仅可以读取  login组件的state，而还可以 调用 login的action，reducer
        loginOut: () => dispatch(createLoginOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)