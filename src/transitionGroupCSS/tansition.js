
import './App.css'
import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


export default class App extends Component {
  state = { show: true, list: [] }



  //  setstate 是异步，所以可以先setstate，在打印 state是怎么变的
  // ?????

  handleState = () => {
    this.setState(
      () => ({
        show: this.state.show ? false : true
      }),
      () => { console.log(" show_yibu_hide", this.state.show) },
      console.log('show 1', this.state.show))
  }


  handleMapList = () => {
    this.setState((preState) => {

      return { list: [...preState.list, 'item'] }
      // console.log(this.state.list)
    })

  }

  render() {

    return (
      <Fragment>
        {/* group 里面要包括 transition CSS， 这样可以统一显示效果 */}
        <TransitionGroup>
          <CSSTransition
            in={this.state.show}
            timeout={1000}
            // 可以给任意classname，但要和css 文件名称一致
            classNames='fade'
            //  生命周期钩子，可以自动删除，当为FALSE的时候
            unmountOnExit
            // 显示第一次的效果
            appear={true}
          // 刚进入，什么也不点的时候，给个颜色效果
          // onEnter={(el) => { el.style.color = 'orange' }}

          >

            {/* 普通CSS */}
            {/* <div className={this.state.show ? 'show' : 'hide'}> */}
            <div >

              <h1>hello world</h1>
              {
                this.state.list.map((listItem, index) => {
                  return (
                    <div key={index}> {listItem} </div>
                  )
                })
              }
            </div>
          </CSSTransition >

        </TransitionGroup>
        <button onClick={this.handleState}> Toggle Me!</button>
        <button onClick={this.handleMapList}> Map  List</button>
      </Fragment >
    )
  }
}
