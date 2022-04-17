import React, { PureComponent } from 'react'
import { TopicItem, TopicWrapper } from '../../pages/home/styled'
import { connect } from 'react-redux'

class Topic extends PureComponent {
    render() {
        // console.log('topic', this.props, this.props.topicLists[0].title)
        return (

            <TopicWrapper>
                {
                    this.props.topicLists.map((topicListObj) => {
                        // 打 log 排查错误
                        console.log("topicListObj")
                        console.log(JSON.stringify(topicListObj))
                        console.log(topicListObj.id)

                        return (
                            <TopicItem key={topicListObj.id}>
                                <img className='topic-img' src={topicListObj.imgUrl} />
                                {topicListObj.title}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapToPropsState = (state) => ({
    topicLists: state.home.topicList
})



export default connect(mapToPropsState, null)(Topic)