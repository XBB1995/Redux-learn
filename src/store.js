// 单一store原则
// export { default as createStore } from 'redux'

// createStore 是 redux 提供的一个用于创建store的方法
import { createStore, applyMiddleware } from "redux"

// 引入中间件
import thunk from "redux-thunk"

// 引入合并后的 reducer
import rootReducer from "./reducers"

// createStore 的第一个参数必须是reducer 如果有多个reducer 则需要在
// reducers目录下先使用combineReducers合并后再导出
export default createStore(rootReducer, applyMiddleware(thunk))
