const express = require('express')
const React = require('react')
const path = require('path')
const redux = require('redux')
const ReactDOMServer = require('react-dom/server')
//const { Provider } = require('react-redux')
//const App = require('./src/components/app/App').default
const data = require('./src/data.json')
// const reducer = require('./src/reducer').default

const app = express()
const port = 3000

const env = process.env.NODE_ENV

let initialState = {
    isFetching: false,
    list: data
}

// app.use(express.static(path.join(__dirname, 'dist')))
// / Serving static files
app.use('/dist', express.static(path.resolve(__dirname, 'dist')))

// app.get("/", (req, res) =>
//   handleRender(req,res)
// );

//SSR function import
const ssr = require('./views/server/');

//console.log("ssr", ssr)

// server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content}  = ssr.default(initialState)
  //console.log("state", preloadedState, "content", content)
  const response = renderFullPage(content, preloadedState)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// app.get('/*.js', (req, res, next) => {
//     res.sendFile(path.join(__dirname, './../../dist/xyz.js'))
// })


app.get('/client', (req, res) => {
    let response = renderFullPage()
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response);
});

// function handleRender(req, res)  {
//     const store = redux.createStore(reducer, initialState)

//     const html = ReactDOMServer.renderToString(
//         <Provider store={store}>
//             <App />
//         </Provider>
//     )
//     const preloadedState = store.getState()
//     const template = renderFullPage(html, preloadedState);
//     res.send(template);
// };

function renderFullPage (html="", initialState={ isFetching:false, list:{} })  { 
    let scripts = '';
    if(html){
        scripts = ` <script>
                       window.__STATE__ = ${JSON.stringify(initialState)}
                    </script>
                  `
      } else {
        scripts = ` <script src="dist/client.js"> </script> `
      }
    let content = `<!DOCTYPE html>
                    <html>
                        <head>
                            <title>test app</title>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
                            <link href="dist/main.css" rel="stylesheet"/>
                        </head>
                        <body>
                            <div id="app">${html}</div>
                            ${scripts}
                        </body>
                    </html>
                `
    return content
}

//app.listen(port)
app.listen(process.env.PORT || port);