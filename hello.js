'use strict';

const s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function bye(name) {
    console.log('bye' + ', ' + name + '!');
}

module.exports = {greet: greet, bye: bye};
