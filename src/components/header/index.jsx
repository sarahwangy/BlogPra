import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper, SearchWrapper, BarSearchWrapper,
    RightSpanWrapper, Logo, Nav, NavItem, NavSearch, Addition,
    Button
} from './style'

import { BsSearch, BsPencilSquare } from "react-icons/bs"
import { connect } from 'react-redux'
import store from '../../redux/store'
import { createFocusedAction, createBlurAction } from '../../redux/action'


// 没有redux 的时候，写法
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
//  把class组件换成 function 无状态 组件，这样性能比较高， 写成function 组件后，this.props，变成了props

const Header = (props) => {
    return (

        <div>

            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'> 首页</NavItem>
                    <NavItem className='left '> 下载APP</NavItem>
                    <NavItem className='right active'> 登陆</NavItem>
                    <NavItem className='right'> Aa</NavItem>
                    <SearchWrapper>

                        <CSSTransition
                            in={props.focused}
                            timeout={200}
                            classNames='slide'>
                            <NavSearch className={props.focused ? 'focused' : ' '}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>

                        <BarSearchWrapper className={props.focused ? 'focused' : ' '}>
                            <BsSearch size={20} />
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


const mapStateToProps = (state) => {
    return {
        // 获取整体state的focus，取名focused，这样 子组件 header就可以用了。
        focused: state.focused
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
        handleInputFocus: () => dispatch(createFocusedAction()),
        handleInputBlur: () => dispatch(createBlurAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)