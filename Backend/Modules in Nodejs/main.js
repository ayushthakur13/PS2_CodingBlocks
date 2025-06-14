// MODULES
// console.log(add(10,20)) // This will give error because add() is not present in this file

const lib = require('./lib')

// to use code from other files, there are two ways:
// 1. using global spcae (not recommended)
// console.log(add(10,20));


// 2. using module.exports
console.log(lib.addFun(10,20))



// Modules in depth (File dependency)
let lib1 = require('./lib1');
let lib2 = require('./lib2');

console.log(lib1);
console.log(lib2);
