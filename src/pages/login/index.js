import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, InputBox, Button } from './styled'
import { getLoginAction } from '../../redux/action/loginAction'


//  clas组件：写法
class Login extends PureComponent {

    // componentDidMount() {

    // }


    render() {
        return (
            <LoginWrapper >
                < LoginBox>
                    <InputBox placeholder='账号' ref={(input) => { this.account = input }}></InputBox>
                    <InputBox placeholder='密码' ref={(input) => { this.password = input }}></InputBox>
                    <Button onClick={() => { this.props.loginData(this.account, this.password) }}>登录</Button>
                </LoginBox>

            </LoginWrapper>
        )
    }
}



const mapStateToProps = (state) => ({

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
