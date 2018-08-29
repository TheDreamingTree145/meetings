import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import { Router, Switch, } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import rootReducer from './reducers/index';
import Search from './search'
import history from './history';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(
    applyMiddleware(promiseMiddleware())
  ));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
