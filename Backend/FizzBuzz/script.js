// Print the numbers from 1 to n with following conditions:
// if no is divisible by 3, print fizz
// if no is divisible by 5, print buzz
// if no is divisible by 15, print fizzbuzz
// otherwise print the no

const n = process.argv[2]

// for(let i=1; i<=n; i++){
//     if(i%15===0) console.log('fizzbuzz')
//     else if(i%5===0) console.log('buzz')
//     else if (i%3===0) console.log('fizz')
//     else console.log(i) 
// }

// Better way
for(let i=1; i<=n; i++){
    let str = ''

    if(i%3 === 0) str+='fizz'
    if(i%5 === 0) str+='buzz'

    if(str === '') console.log(i)
    else console.log(str)
}
