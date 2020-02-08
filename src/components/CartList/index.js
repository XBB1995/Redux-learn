import React, { Component } from 'react'
// connect 方法执行之后是一个高阶组件
import { connect } from 'react-redux'

import {
  increment,
  decrement,
  decrementAsync
} from '../../actions/cart'

// mapStateTopProps 这里的state实际上就是store.getState()的值
const mapState = (state) => {
  // return的内容 在组件里就可以通过this.props来获取
  return {
    cartList: state.cart
  }
}

// 使用修饰器模式 HOC
@connect(mapState, { increment, decrement, decrementAsync })
class CartList extends Component {
  render() {
    // console.log(this.props)
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cartList.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={this.props.decrementAsync.bind(this, item.id)}>decrement</button>
                    <button onClick={
                      () => {
                        this.props.decrement(item.id)
                      }
                    }
                    >-</button>
                    <span>{item.amount}</span>
                    <button onClick={this.props.increment.bind(this, item.id)}
                    >+</button>
                  </td>
                  <td><input type="checkbox"></input></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}

// const mapDispatch = dispatch => {
//   return {
//     add: (id)=> dispatch(increment(id)),
//     reduce: (id) => dispatch(decrement(id))
//   }
// }

// connect 执行之后才是一个高阶组件 HOC
// 有四个参数 常用的是前两个参数
// 1. mapState 作用是从 store 中把 state 注入到当前组件的 props 上
// 2. mapdispatch 作用是把 action 生成的方法注入到当前组件的 props 上
// 但通常直接传入一个对象来作为第二个参数 对象就是 actionCreators 在组件内就通过
// this.props.actionCreator 来调用 调用之后 actionCreator就会自动帮你把内部的action
//  dispatch 出去
// 使用 react-redux 提供的 Provider 组件包裹 App 组件
// 并将 store 传入 Provider 组件
// 通过借助 connect 可以省去中间传递 store 的过程 并修改state
// 近似理解为 connect(state, action)

// export default connect(mapState, mapDispatch)(CartList)
export default CartList
