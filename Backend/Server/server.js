// This file sets up a simple web server using Node.js to serve HTML pages.

const http = require('http');
const port = 8080; // defines the port number on which your web server will listen for incoming requests.

const fs = require('fs')

// createServer(): It sets up your application to listen for incoming web requests from clients.
// It takes a callback function that runs automatically for every new request.
const server = http.createServer((req, res)=>{

    res.writeHead(
        200,
        {
            "content-type":'text/html'
        }
    )
    // This sets the HTTP status code (200 for OK) and response headers before sending content.

    // This shows how to read a specific file (index.html) directly. 
    // fs.readFile(
    //     './index.html',
    //     (err,data)=>{
    //         if(err) return console.log(err)
    //         res.end(data)
    //     }
    // )

    let file;
    if(req.url == '/') file = 'index.html'
    else if(req.url == '/profile') file = 'profile.html'
    else file = 'signin.html'

    fs.readFile(file,(err,data)=>{
            if(err) return console.log(err)
            res.end(data)
        }
    )


    // Function: res.end() - Signals that all response headers and body have been sent.
    // What it does: It completes the response and closes the connection to the client.

    // res.end("<h1 style='color:orange'>Hello, this is your requsted data</h1>");
});


// Function: server.listen() - Starts the HTTP server and makes it listen for incoming connections.
server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started at',port)
});
