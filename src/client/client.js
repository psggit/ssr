// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './../components/app/App';
// import reducer from './../reducer'
// import {createStore} from 'redux'
// import { Provider } from 'react-redux'
// const store = createStore(reducer)
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , document.getElementById('app')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './../components/app/App';
import reducer from './../reducer'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
const preloadedState = window.__STATE__
// Allow the passed state to be garbage-collected
delete window.__STATE__
// Create Redux store with initial state
const store = createStore(reducer, preloadedState)
ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);