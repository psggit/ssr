// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import templateFn from './template';
// import App from './../components/app/App';

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const templateFn = require('./template')
const App = require('./../components/app/App')

export default (req, res) => {
    const html = ReactDOMServer.renderToString(
        <App />
    );
    const template = templateFn(html);
    res.send(template);
};