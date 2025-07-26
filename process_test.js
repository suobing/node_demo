'use strict';

// ========================================
// process.nextTick() 详细解释
// ========================================

/*
什么是事件循环？

想象一下 Node.js 就像一个餐厅服务员：（js和node.js都是事件驱动的单线程模型，不断执行事件，知道没有了就退出）
- 服务员需要处理很多桌客人的需求（各种任务）
- 服务员不能只服务一桌客人，要轮流照顾所有客人
- 这就是"事件循环" - 不断循环处理各种任务

事件循环的阶段：

Node.js 事件循环有6个主要阶段，就像服务员的工作流程：
1. timers阶段 - 处理 setTimeout、setInterval 的到期回调
2. pending callbacks阶段 - 处理一些延迟的I/O回调
3. idle, prepare阶段 - 内部使用
4. poll阶段 - 获取新的I/O事件，处理I/O回调
5. check阶段 - 处理 setImmediate 的回调
6. close callbacks阶段 - 处理关闭事件的回调

执行当前脚本 vs 事件循环：

执行当前脚本：
- 同步代码会立即、按顺序执行完

事件循环：
- 当脚本执行完毕后，Node.js 开始处理其他任务（如定时器、网络请求等）

process.nextTick() 的作用：
- nextTick 的回调会在当前脚本执行完毕后立即执行 ———— 当前脚本执行完的后置处理
- 但会在事件循环的下一个阶段开始之前执行
- 这确保了 nextTick 的回调优先级很高

简单类比：
想象你在写作业：
- 当前脚本 = 你正在写的这道题
- 事件循环 = 你写完这道题后，去处理其他事情（喝水、上厕所、写下一题）
- process.nextTick() = 你写完当前题目后，立即做一件小事，然后再去处理其他事情
*/

console.log('=== process.nextTick() 示例 ===');

console.log('1. 开始执行同步代码');

// process.nextTick() 注册回调函数
process.nextTick(function () {
    console.log('3. nextTick 回调执行 - 在下一轮事件循环开始前执行');
});

console.log('2. 同步代码执行完毕');

// 对比 setTimeout
setTimeout(function () {
    console.log('5. setTimeout 回调执行 - 在事件循环的 timers 阶段执行');
}, 0);

console.log('4. 脚本即将结束');

// 程序退出时的回调
process.on('exit', function (code) {
    console.log('6. 程序即将退出，退出码: ' + code);
});

console.log('=== 执行顺序说明 ===');
console.log('预期输出顺序：1 -> 2 -> 4 -> 3 -> 5 -> 6');
console.log('注意：nextTick 在 setTimeout 之前执行！');