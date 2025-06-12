// 2.Promise-based (for async/await):
// fs.promises.writeFile() uses Promises, making it great for modern async/await syntax.
// This version is also asynchronous and non-blocking, just like the callback version.
// SYNTAX: 
// const fsPromises = require('fs/promises');
// ... later in an async function
// await fsPromises.writeFile(filePath, data, [options]);

const {writeFile} = require('fs/promises')

let data = "This file is written over here from writeFile_Promises.js"

// Promise syntax
// let write = writeFile(
//     'message.text',
//     data,
//     {
//         encoding: 'utf-8',
//         flag: 'w'
//     }
// )

// write.then(()=>{
//     console.log('File written successfully')
// })
// .catch((err)=>{
//     console.log('Error: ', err.message)
// })



// Async/await syntax
async function writeData(data) {
    await writeFile(
        'message1.text',
        data,
        {
            encoding: 'utf-8',
            flag: 'w'
        }
    )
}

writeData(data)
