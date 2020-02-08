import React from 'react';
import { render } from 'react-dom';

// Provider 是 react-redux 提供的组件
import { Provider} from 'react-redux'

import App from './App';
import store from './store'

// 将store绑定在window上 方便调试 
// window.store = store

render(
  // 一般就直接把这个组件放在应用程序的最顶层 
  // 这个组件必须要有一个 store 的属性
  // 在最外层包裹了这个 Provider 组件后 所有后代的组件都能调用
  <Provider store={store}>
      <App />
  </Provider>
  , document.querySelector('#root')
);