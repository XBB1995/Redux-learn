import actionType from './actionType'

export const increment = (id) => {
  // 常见写法 返回一个对象 可以传入参数
  return {
    type: actionType.CART_AMOUNT_INCREMENT,
    // payload 是约定俗成的写法 用于获取参数
    payload: {
      id
    }
  }
}

export const decrement = (id) => {
  return {
    type: actionType.CART_AMOUNT_DECREMENT,
    payload: {
      id
    }
  }
}