import { getByTitle } from '@testing-library/react'
import { useParams } from "react-router-dom";

//  useparams hooks 不能用在class类 组件里面，只能用在function

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './styled'
import { GetDetailAction } from '../../redux/action/detailAction'


//  clas组件：写法
class Detail extends PureComponent {

    componentDidMount() {

        this.props.getDetail()
    }


    render() {


        console.log('detail props:', this.props)


        return (
            <DetailWrapper>
                <Header> {this.props.detail.title}</Header>
                <Content>
                    <img src="https://img.syt5.com/2021/1216/20211216073855722.jpg.420.280.jpg" alt='111 ' />
                    <p>{this.props.detail.content}</p>
                </Content>
            </DetailWrapper>
        )
    }
}



const mapStateToProps = (state) => ({
    detail: state.detail
})

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: () => dispatch(GetDetailAction())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
