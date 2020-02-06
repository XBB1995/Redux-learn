import React from 'react';
import { render } from 'react-dom';

import App from './App';
import store from './store'

// 将store绑定在window上 方便调试 
// window.store = store

render(
  <App store={store} />
  , document.querySelector('#root')
);