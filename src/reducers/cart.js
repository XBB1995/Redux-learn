// 为了避免actionType重复 所以一般会把actionType放在一个文件里统一管理 
// 并且能够避免写错
import actionType from '../actions/actionType'

// 数据初始化 通常在reducer中进行
const initState = [{
  id: 1,
  title: 'iPhone 11',
  price: '$4799',
  amount: 10
}, {
  id: 2,
  title: 'iPhone XR',
  price: '$4099',
  amount: 20
}]

// 创建购物车的reducer reducer的固定写法是两个参数 
// state状态及其初始值 操作action
export default (state = initState, action) => {
  // 返回对象 但是对象的类型要一样
  switch (action.type) {
    case actionType.CART_AMOUNT_INCREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.amount += 1
        }
        return item
      })
    case actionType.CART_AMOUNT_DECREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.amount -= 1
        }
        return item
      })
      // 一定要有default 当actionType不匹配的时候 
      // 就不做任何处理 返回上一次的state
    default:
      return state
  }
}
