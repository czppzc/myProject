let http = require('http');
http.createServer((req, res) => {
    console.log(req.url, 'test');
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
    })
    res.end('我创建了一个服务器环境')
}).listen(8888)