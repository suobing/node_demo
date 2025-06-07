// client.js (WebSocket 客户端)
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

// 连接成功
ws.on('open', () => {
    console.log('已连接到服务器');

    // 发送消息
    ws.send('你好，服务器！');
});

// 接收消息
ws.on('message', (message) => {
    console.log(`收到服务器消息: ${message}`);

    // 5秒后再发送一条消息
    setTimeout(() => {
        ws.send('这是另一条消息');
    }, 5000);
});

// 连接关闭
ws.on('close', () => {
    console.log('与服务器的连接已关闭');
});

// 错误处理
ws.on('error', (error) => {
    console.error('WebSocket 错误:', error);
});