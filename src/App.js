import React, { Component } from 'react'

// 注意在导入组件时 需要用花括号包裹
import { BlogList } from './components'

export default class App extends Component {
  render() {
    return (
      <div>
        <BlogList />
      </div>
    )
  }
} 

