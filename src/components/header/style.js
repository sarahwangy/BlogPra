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
    padding-right: 70px;
    box-sizing: border-box;
    border: 1px solid green;
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

export const SearchWrapper = styled.div`
    position: relative;
    float: left; 
    // background: red;
    &. slide-enter{
        transition: all 0.2s ease-out;
    }

    &. slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all 0.2s ease-out;
    }
    &. slide-exit-active{
        width:160px;
    }

`;

// 当用到icon 不起效的时候，可以单独拎出来，用个span 或者div 包起来，写样式
export const BarSearchWrapper = styled.span`
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align:center;
    &.focused{
        background-color: #777;
        color: #fff;
    }
`;



export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 35px 0 20px;
    margin-top: 9px;
    margin-left:20px;
    border:none;
    outline:none;
    box-sizing: border-box;
    border: 1px solid black;
    outline: none;
    border-radius: 19px;
    background: # eee;
    font-size:14px;
    color:#777;
    & :: placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`;


export const Addition = styled.div`
    position: absolute;
    right:0;
    top:0;
    height:56px;`;

export const Button = styled.div`
    position: relative;
    float: right;
    margin-top: 9px;
    line-height: 38px;
    border-radius: 19px;
    text-align: center;
    border: 1px solid #ea6f5a;
    padding: 0 20px;
    margin-right: 20px;
    &.reg{
        color:#ea6f5a;
    }
    &.writting {
        color:#fff;
        background:#ea6f5a;
    }
`;

export const RightSpanWrapper = styled.span`
    vertical-align: middle;
`