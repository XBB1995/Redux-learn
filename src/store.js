// 单一store原则
// export { default as createStore } from 'redux'

import { createStore } from 'redux'

import rootReducer from './reducers'

export default createStore(rootReducer)