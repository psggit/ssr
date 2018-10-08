function template (html="", initialState={})  { 
    if(html){
        scripts = ` <script>
                       window.__STATE__ = ${JSON.stringify(initialState)}
                    </script>
                    <script src="assets/client.js"></script>
                    `
      } else {
        scripts = ` <script src="assets/bundle.js"> </script> `
      }
    `<!DOCTYPE html>
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
`}

module.exports = template