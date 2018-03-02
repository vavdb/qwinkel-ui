import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import qwinkelApp from './modules/cart';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

/* tslint:disable:no-string-literal */
let devtools: any = window['devToolsExtension']
  ? window['devToolsExtension']()
  : (f: any) => f;
/* tslint:enable:no-string-literal */
const store: any = devtools(createStore)(qwinkelApp);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
