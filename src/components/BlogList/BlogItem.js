import React, { Component } from 'react'

// 实际上这是一个展示组件
export default class BlogItem extends Component {
  render() {
    return (
      <li>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </li>
    )
  }
}
