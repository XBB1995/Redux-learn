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

export default (state = initState, action) => {
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
    default:
      return state
  }
}
