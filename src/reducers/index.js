// 在实际的项目中 只有一种单一的store 但状态会有很多分类
// 需要划分reducer 但createStore只接受一个reducer
// 因此 redux 提供了合并多个reducer的方法 不要手动合并!!!
import { combineReducers } from 'redux'

// 引入 cart reducer 如果有多个 则继续引入
import cart from './cart'

// 通过combineReducers自动合并reducers
// 并进一步转化
export default combineReducers({
  // 在外部可以通过 store.getState().cart 
  // 来获取 cartReducer 中的 state
  cart
})