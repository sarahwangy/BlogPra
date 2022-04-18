import React, { PureComponent } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, InputBox, Button } from './styled'
import { getLoginAction } from '../../redux/action/loginAction'


//  clas组件：写法
class Login extends PureComponent {

    render() {
        const { login } = this.props
        console.log('login boolen', login)
        if (!login) {
            return (
                <LoginWrapper >
                    < LoginBox>
                        <InputBox placeholder='账号' ref={(input) => { this.account = input }}></InputBox>
                        <InputBox placeholder='密码' ref={(input) => { this.password = input }}></InputBox>
                        <Button onClick={() => { this.props.loginData(this.account, this.password) }}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return (
                < Routes >
                    <Route path="" element={<Navigate to="/" />} />
                </Routes >
            )
        }
    }
}



const mapStateToProps = (state) => ({
    login: state.login.login

})

const mapDispatchToProps = (dispatch) => {
    return {
        loginData: (account, password) => {
            console.log("login_input", account.value, password.value);
            dispatch(getLoginAction(account.value, password.value));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
