import { combineReducers } from 'redux'
import cart from './cart'

// 通过combineReducers自动合并reducers
// 并进一步转化
export default combineReducers({
  cart
})