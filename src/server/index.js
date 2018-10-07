const express = require('express')
const React = require('react')
const path = require('path')
const createStore = require('redux').createStore
const ReactDOMServer = require('react-dom/server')
const { Provider } = require('react-redux')
const templateFn = require('./template').default
const App = require('./../components/app/App').default
const data = require('./../../src/data.json')
const reducer = require('./../reducer').default

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')))

app.get("/", (req, res) =>
  handleRender(req,res)
);

function handleRender(req, res)  {
    console.log("store", createStore, "data", data, "reducer", reducer)
    const store = createStore(reducer, data)

    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const preloadedState = store.getState()
    console.log("preloaded state", preloadedState)
    const template = renderFullPage(html, preloadedState);
    res.send(template);
};

function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        </body>
      </html>
      `
}


app.listen(port)