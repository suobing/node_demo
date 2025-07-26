'use strict';

console.log("Hello World!");

const s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function bye(name) {
    console.log('bye' + ', ' + name + '!');
}

// 导出模块
// * 默认情况下该文件hello.js就是一个模块hello，下面是为了可以使用hello.greet这种语法
module.exports = {greet: greet, bye: bye};
