// writeFile is a Node.js function to write content to a file.
// It's part of Node.js's built-in 'fs' (File System) module.
// Main purpose: Writes data to a file, creating it if it doesn't exist.
// Important: If the file already exists, writeFile will OVERWRITE its entire content.

// There are 3 types of writeFile() in Node.js:

// Callback API (fs.writeFile): Asynchronous, uses a callback function for completion/error.
// Promises API (fs.promises.writeFile): Asynchronous, uses Promises for then()/catch() or async/await.
// Synchronous API (fs.writeFileSync): Synchronous, blocks execution, uses try...catch for errors.

// 1. Asynchronous (Callback-based):
// fs.writeFile() is asynchronous; it won't block your program while writing.
// It uses a callback function that runs once the file operation is done (success or error).
//SYNTAX : fs.writeFile(filePath, data, [options], callback);

// const fs = require('fs')
// fs.writeFile()

const {writeFile} = require('fs')

let data = "This file is written over here from writeFile.js"

writeFile(
    'hello.txt',
    data,
    {
        encoding: 'utf-8',
        flag: 'w'
    },
    (err)=>{
        if(err) return console.log('ERROR: ', err)
        console.log('File written successfully')
    }
)


// 2.Promise-based (for async/await):
// fs.promises.writeFile() uses Promises, making it great for modern async/await syntax.
// This version is also asynchronous and non-blocking, just like the callback version.



// 3.Synchronous
// fs.writeFileSync() is synchronous; it will block your program until the write is complete.
// Use fs.writeFileSync() carefully, as it can make your application unresponsive.
// SYNTAX: fs.writeFileSync(filePath, data, [options]);

