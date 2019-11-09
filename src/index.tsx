import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './configurations/Store';
import { GameApp } from './ui/GameApp';
import 'antd/dist/antd.css';
import './index.less';

ReactDOM.render(
   <Provider store={store}>
      <GameApp/>
   </Provider>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
