const http = require("http")
const fs = require('fs')

http.createServer(function(request, response){
    console.log('8888 request received', request.url)

    const html = fs.readFileSync('crossOrigin.html','utf-8')
    response.writeHead(200,{
        'Content-Type':'text/html'
    })
    response.end(html)
}).listen(8888)

console.log('server2 listening on 8888')