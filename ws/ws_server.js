// server.js (WebSocket 服务器)
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('客户端已连接');

    // 接收消息
    ws.on('message', (message) => {
        console.log(`收到客户端消息: ${message}`);

        // 回复消息
        ws.send(`服务器已收到: ${message}`);
    });

    // 连接关闭
    ws.on('close', () => {
        console.log('客户端已断开');
    });
});

console.log('WebSocket 服务器运行在 ws://localhost:8080');