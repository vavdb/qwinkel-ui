import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import qwinkelApp from './reducers';
import { Cart } from  './interfaces';
let cart = {} as Cart;
cart.cartId = 1;
cart.items = [];

let store = createStore(qwinkelApp, cart);
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';
ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>
, document.getElementById('root')as HTMLElement);
