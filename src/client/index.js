import React from 'react';
import ReactDOM from 'react-dom';
import App from './../components/app/App';
import reducer from './../reducer'
const preloadedState = window.__PRELOADED_STATE__
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__
// Create Redux store with initial state
const store = createStore(reducer, preloadedState)
console.log("store", store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));