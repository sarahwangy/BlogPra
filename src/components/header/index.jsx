import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper, SearchWrapper, BarSearchWrapper,
    RightSpanWrapper, Logo, Nav, NavItem, NavSearch, Addition,
    Button, SearchInfoList, SearchInfoTitle, SearchInfoSwitch,
    SearchInfoItems, SearchDiv
} from './style'

import { BsSearch, BsPencilSquare, BsGem } from "react-icons/bs"
import { connect } from 'react-redux'
import { createFocusedAction, createBlurAction, GetListAction } from '../../redux/action'


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

class Header extends Component {


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
        return (
            <div>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className='left active'> 首页</NavItem>
                        <NavItem className='left '> 下载APP</NavItem>
                        <NavItem className='right active'> 登陆</NavItem>
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
                        <Button className='writting'>
                            <RightSpanWrapper>
                                <BsPencilSquare size={18} />
                            </RightSpanWrapper> 写文章
                        </Button>
                        <Button className='reg'>注册</Button>

                    </Addition>
                </HeaderWrapper >
            </div>
        )
    }

}





const mapStateToProps = (state) => {
    return {
        // 获取整体state的focus，取名focused，这样 子组件 header就可以用了。
        focused: state.header.focused,
        list: state.header.list
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
        handleInputBlur: () => dispatch(createBlurAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)