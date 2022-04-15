import styled from 'styled-components'
import logoPic from '../../static/jianshu.png'

export const HeaderWrapper = styled.div`
    height : 56px;
    // background: red;
    border-bottom: 1px solid #f0f0f0;
    position: relative; `;

export const Logo = styled.a`
    width: 100px;
    height: 56px;
    position: absolute;
    top:0;
    left:0;
    display:block;
    background:url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width:960px;
    height: 100%;
    margin: 0 auto;
    // background: green;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 15px;
    font-size: 17px;
&.left {
    float: left;
}
&.right{
    float:right;
}`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 20px;
    margin-top: 9px;
    box-sizing: border-box;
    border: 1px solid black;
    outline: none;
    border-radius: 19px;
    background: # eee;
`;
