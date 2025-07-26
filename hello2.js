'use strict';

console.log("Hello World!");

const s = 'Hello';

// 在方法上加了export
export function greet(name) {
    console.log(s + ', ' + name + '!');
}

export function bye(name) {
    console.log('bye' + ', ' + name + '!');
}
