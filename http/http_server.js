const http = require('http');

const server = http.createServer((req, res) => {
    // 设置CORS头
    res.setHeader('Access-Control-Allow-Origin', '*');

    // 处理根路径请求
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>欢迎页面</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          h1 { color: #333; }
          p { color: #666; }
        </style>
      </head>
      <body>
        <h1>欢迎使用Node.js HTTP服务</h1>
        <p>可用API接口：</p>
        <ul style="list-style: none; padding: 0;">
          <li><a href="/api/data">GET /api/data</a></li>
          <li>POST /api/data</li>
        </ul>
      </body>
      </html>
    `);
    }
    // 处理GET请求
    else if (req.method === 'GET' && req.url === '/api/data') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ message: 'GET请求成功', data: [1, 2, 3] }));
    }
    // 处理POST请求
    else if (req.method === 'POST' && req.url === '/api/data') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                message: 'POST请求成功',
                received: JSON.parse(body)
            }));
        });
    }
    // 处理其他请求
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: '接口不存在' }));
    }
});

// 启动服务
const PORT = 80;
server.listen(PORT, () => {
    console.log(`服务运行在 http://localhost:${PORT}`);
    console.log(`欢迎页面: http://localhost:${PORT}/`);
});