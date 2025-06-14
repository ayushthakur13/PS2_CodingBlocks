function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// 1. This way is not recommended because it pollutes the global space
// global.add = function add(a,b){
//     return a+b;
// }

// 2.
module.exports.addFun = add
