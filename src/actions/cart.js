import actionType from './actionType'

// action 有两种写法
// 第一种 对象 但是不方便传递参数
// export const incerement = {
// type: actionType.CART_AMOUNT_INCREMENT,
// payload: {
//   id: 123
// }
// }

// 第二种 常用 actionCreator 它是一个方法 返回一个对象
// 这个对象才是真正的 action
export const increment = (id) => {
  // 常见写法 定义方法返回一个对象 可以传入参数
  return {
    type: actionType.CART_AMOUNT_INCREMENT,
    // payload 是约定俗成的写法 用于获取参数
    payload: {
      id
    }
  }
}

// 同步 action
export const decrement = (id) => {
  return {
    type: actionType.CART_AMOUNT_DECREMENT,
    payload: {
      id
    }
  }
}

// 异步 action 在actionCreators里返回一个方法 该方法的参数是dispatch
// dispatch(同步action) 
export const decrementAsync = id => dispatch => {
  // 通过激活 thunk 中间件 允许返回一个函数
  // 通过保留dispatch 达到手动dispatch(action)的功能
  // 异步函数 
  setTimeout(() => {
    dispatch(decrement(id))
  }, 1000)
}


// function getAmount() {
//   return dispatch => {
//     dispatch(requestPosts())
//     return fetchAmount().then(data => {
//       dispatch(receivePostOnSuccess(data))
//     }, error => {
//       dispatch(receivePostOnError('error'))
//     })
//   }
// }