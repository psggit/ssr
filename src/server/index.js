// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './../components/app/App';
// import reducer from './../reducer'
// import {createStore} from 'redux'
// import { Provider } from 'react-redux'
// const preloadedState = window.__STATE__
// // Allow the passed state to be garbage-collected
// delete window.__STATE__
// // Create Redux store with initial state
// const store = createStore(reducer, preloadedState)
// ReactDOM.hydrate(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , document.getElementById('app')
// );


import React from 'react'
import { renderToString } from 'react-dom/server'
import reducer from './../reducer'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
//import configureStore from '../redux/configureStore'
import App from './../components/app/App';


export default function render(initialState) {
  // Configure the store with the initial state provided
  const store = createStore(reducer, initialState)

  // render the App store static markup ins content variable
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState()

  //console.log("content", content, "state", preloadedState)

  return {content, preloadedState};
};
