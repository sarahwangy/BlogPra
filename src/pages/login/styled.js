import styled from 'styled-components'

export const LoginWrapper = styled.div`
    position: absolute;
    z-index:0;
    left:0;
    right:0;
    bottom:0px;
    top:56px;
  
    background:#eee;
`;

export const LoginBox = styled.div`
    width:360px;
    padding-top:20px;
    height: 220px;
    margin: 100px auto;
    background: #fff;

    box-shadow: 0 0 8px rgba(0,0,0,0.1);

`;

export const InputBox = styled.input`
    width:200px;
    height: 30px;
    display: block;
    line-height: 30px;
    padding: 0 10px;
    color:#777;
    margin:10px auto;
    &:focus {
        border: none;
    }
    &:focus-visible {
        border: none;
        // border-color: red;
        // outline-color: red;
    }
`;

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    color:#fff;
    background:#3194d0;
    border-radius:15px;
    margin: 10px auto;
    text-align: center;

`;