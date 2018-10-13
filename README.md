# ssr

option 1:

npm build (Will execute config for both client and server)

npm start (will start the node(express) server)

option 2:

npm run wepback:ssr (Entry point is server(index.js), will not generate css files) so on giving npm start will get the output without styles

option 3:

npm run wepback:client (Entry point is client(index.js), will generate css files) so on giving npm start will get the output with styles





