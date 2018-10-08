const express = require('express')
const React = require('react')
const path = require('path')
const redux = require('redux')
const ReactDOMServer = require('react-dom/server')
const { Provider } = require('react-redux')
//const templateFn = require('./template')
const App = require('./src/components/app/App').default
const data = require('./src/data.json')
const reducer = require('./src/reducer').default

const app = express()
const port = 3000

// app.use(express.static(path.join(__dirname, 'dist')))
// / Serving static files
app.use('/dist', express.static(path.resolve(__dirname, 'dist')))

app.get("/", (req, res) =>
  handleRender(req,res)
);

// app.get('/*.js', (req, res, next) => {
//     res.sendFile(path.join(__dirname, './../../dist/xyz.js'))
// })


// app.get('/client', (req, res) => {
//     let response = renderFullPage()
//     res.setHeader('Cache-Control', 'assets, max-age=604800')
//     res.send(response);
// });

function handleRender(req, res)  {
    console.log("fefefef")
    //console.log("store", redux.createStore)
    const store = redux.createStore(reducer, data)

    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const preloadedState = store.getState()
    // console.log("preloaded state", preloadedState)
    const template = renderFullPage(html, preloadedState);
    res.send(template);
};

function renderFullPage (html="", initialState={ items:{} })  { 
    let scripts = '';
    if(html){
        scripts = ` <script>
                       window.__STATE__ = ${JSON.stringify(initialState)}
                    </script>
                    <script src="dist/client.js"></script>
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
    </head>
    <body>
        <div id="app">${html}</div>
        ${scripts}
    </body>
    </html>
    `
    return content
}

// function renderFullPage(html, preloadedState) {
//     return `
//       <!doctype html>
//       <html>
//         <head>
//           <title>Redux Universal Example</title>
//         </head>
//         <body>
//           <div id="root">${html}</div>
//           <script>
//           // WARNING: See the following for security issues around embedding JSON in HTML:
//           // http://redux.js.org/recipes/ServerRendering.html#security-considerations
//           window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
//         </script>
//         </body>
//       </html>
//       `
// }


app.listen(port)