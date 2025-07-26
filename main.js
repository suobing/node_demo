'use strict';

// 引入hello模块:
// * node和js的一大区别所在，js不支持require
const hello = require('./hello'); // 需是相对路径，如果是const greet = require('hello'); 会在内置 全局 当前模块下找，会报错

let s = 'Michael';

// 因为export这里才可以用
hello.greet(s); // Hello, Michael!
hello.bye(s);
