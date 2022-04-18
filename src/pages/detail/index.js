import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './styled'

export default class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header> ...</Header>
                <Content>
                    <img src="https://img.syt5.com/2021/1216/20211216073855722.jpg.420.280.jpg" alt='111 ' />
                    124
                </Content>
            </DetailWrapper>
        )
    }
}
