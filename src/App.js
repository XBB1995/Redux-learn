import React, { Component } from 'react'

import {
  CartList
} from './components'

export default class App extends Component {
  render() {
    return (
      <div>
        <CartList store={this.props.store} />
        {/* 使用下方的展开方式传递参数也是可行的 从props中获取store */}
        {/* <CartList {...this.props.store} /> */}
      </div>
    )
  }
}

