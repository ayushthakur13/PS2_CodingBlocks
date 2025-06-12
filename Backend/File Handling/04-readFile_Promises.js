// readFile
// 2. Promise-based (for async/await)

const {readFile} = require('fs/promises')

// Promise syntax
// let fileData = readFile('message.text', {encoding: 'utf-8'})

// fileData.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err.message)
// })


// Async/await syntax
async function readData() {
    let data = await readFile('message1.text', {encoding: 'utf-8'}) 
    console.log(data)
}

readData()
