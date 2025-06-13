console.log('Hello world');

// let a =10
// let b=20
// console.log(a+b)

let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])

console.log('After adding =',a+b);

// we are using third and fourth element of array because process.argv contains two more elements before
console.log(process.argv)
