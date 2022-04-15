import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style'

export default class Header extends Component {
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
                        <NavSearch />

                    </Nav>
                </HeaderWrapper >
            </div>
        )
    }
}
