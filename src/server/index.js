// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import templateFn from './template';
// import App from './../components/app/App';
const express = require('express')
const React = require('react')
const path = require('path')
const ReactDOMServer = require('react-dom/server')
const templateFn = require('./template')
const App = require('./../components/app/App')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')))

app.get("/", (req, res) =>
  handleRender(req,res)
);

function handleRender(req, res)  {
    const html = ReactDOMServer.renderToString(
        App
    );
    const template = templateFn.template(html);
    res.send(template);
};

app.listen(port)