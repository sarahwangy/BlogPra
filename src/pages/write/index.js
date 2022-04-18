

import React, { PureComponent } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


//  clas组件：写法
class Write extends PureComponent {

    render() {
        const { login } = this.props
        // console.log('login boolen', login)
        if (login) {
            return (
                <div>
                    <Link to='/write'>
                        <b>YOU can WRITE here!</b>
                    </Link>
                </div>
            )
        } else {
            return (
                < Routes >
                    <Route path="" element={<Navigate to="/login" />} />
                </Routes >
            )
        }
    }
}


const mapStateToProps = (state) => ({
    login: state.login.login
})


export default connect(mapStateToProps, null)(Write)
