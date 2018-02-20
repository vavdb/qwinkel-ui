import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './store'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()


ReactDOM.render
    (<Router history={history}>
        <App />
    </Router>
        , document.getElementById('root'));
registerServiceWorker();
