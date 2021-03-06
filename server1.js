const http = require("http")
const url = require("url")

http.createServer(function(request, response){
    console.log('8887 request received', request.url)

    response.writeHead(200,{
        //CORS:简单请求
        'Access-Control-Allow-Origin':'*', //允许的域名
        'Access-Control-Allow-Credentials':true, //是否允许发送cookie

        //CORS:非简单请求
        'Access-Control-Allow-Headers':'X-Test-Cors', //允许的请求头字段
        'Access-Control-Allow-Methods':'PUT,DELETE', //允许的请求方法

        'Access-Control-Max-Age':'1000' //有效期(s)内不需再次发送OPTIONS请求进行预检

    })

    var jsonpCallback = url.parse(request.url,true).query;
    if(jsonpCallback.callback) {
        //jsop
        var jsonpData = '{"success":"jsonp"}'
        response.write(jsonpCallback.callback+"(");
        response.write(jsonpData)
        response.write(")");
    }else{
        //cors
        var corsData = '{"success":"cors"}'
        response.write(corsData)
    }
    response.end()

}).listen(8887)

console.log('server1 listening on 8887')