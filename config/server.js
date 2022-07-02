const http = require("http");

const app= require('../api/v1/common/app')

const port = process.env.port||3000
const server = http.createServer(app)

server.listen(port,()=>{
    console.log('server stablish on port:'+port);
})