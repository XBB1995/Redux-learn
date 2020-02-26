import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import store from "./store"

import { Map, fromJS } from "immutable"

const state = {
  name: "Xbb",
  todos: ["eat", "sleep"],
  obj: {
    x: 1,
    y: {
      z: 2
    }
  }
}

// js状态转化成 immutable 数据状态
const imState = fromJS(state)
// get 和 getIn 注意参数的格式
console.log(imState.get("todos").get(0))
console.log(imState.getIn(["todos", 1]))
// getIn 适合复杂 深层次
imState.getIn(["obj", "y", "z"])
imState.setIn(["obj", "y", "zz"], 100)
// 转化成JS 再使用js方法获取值
imState.toJS().obj.y.z

// immutable 的特性 每次更新后返回一个新数据对象(拷贝)
// 有修改的则需要新的空间来存储 总是保证上一个状态可用
// const newState = imState.set("logo", "MI")
// console.log(newState.get("logo"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
