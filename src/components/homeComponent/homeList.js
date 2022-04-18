import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../../pages/home/styled'
import { getMoreListAction } from '../../redux/action/homeAction'


class HomeList extends PureComponent {
    render() {

        // 这里为什么是空的？ 
        console.log("home list props:", this.props)

        return (
            <div>

                {
                    this.props.articleList.map((articleObj, index) => {
                        console.log("articleObj.title,", articleObj.title)
                        console.log(JSON.stringify(articleObj))

                        return (
                            <Link key={index} to={`/detail/${articleObj.id}`} >
                                <ListItem >
                                    <img className='list-img' src={articleObj.imgUrl} alt='120' />
                                    <ListInfo>
                                        <h3 className='list-title'>
                                            {articleObj.title}
                                        </h3>
                                        <p className='list-desc'>
                                            {articleObj.desc}
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )

                    })
                }
                <LoadMore onClick={() => this.props.getMoreList(this.props.articleListPage)}> 加载更多</LoadMore>
            </div >
        )
    }
}



const mapToPropsState = (state) => {
    console.log("mapToPropsState --->")
    console.log(JSON.stringify(state.home.articleListPage))
    // console.log(JSON.stringify(state.home.articleList))
    return {
        articleList: state.home.articleList,
        articleListPage: state.home.articleListPage
    }

}

const mapDispatchToProps = (dispatch) => {
    // console.log("dispatch")
    return {
        getMoreList: (articleListPage) => {
            dispatch(getMoreListAction(articleListPage))
        }
    }
}


export default connect(mapToPropsState, mapDispatchToProps)(HomeList)