import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../../pages/home/styled'

class Recommend extends PureComponent {


    render() {
        // ???
        console.log("recommend list", this.props)
        return (
            <RecommendWrapper>
                {
                    this.props.recommendList.map((recommendObj) => {
                        return < RecommendItem key={recommendObj.id} imgUrl={recommendObj.imgUrl} />
                    })
                }

            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    recommendList: state.home.recommendList
})

export default connect(mapStateToProps, null)(Recommend)

