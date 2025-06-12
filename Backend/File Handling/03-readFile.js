// readFile

// 1. Asynchronous fs.readFile() (Callback-based)
// SYNTAX: fs.readFile(path[, options], callback)

const {readFile} = require('fs')

readFile(
    'hello.txt',
    {
        encoding: 'utf-8'
    },
    (err, data) => {
        if(err) return console.log('ERROR: ', err)
        console.log(data) 
    }
)
