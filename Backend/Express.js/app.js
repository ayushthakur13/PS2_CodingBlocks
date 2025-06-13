const express = require('express');
const app = express();
const path = require('path')

const PORT = 8888

//
app.listen(PORT, (err)=>{
    if(err) return console.log('Server failed');
    console.log(`Server started at http://localhost:${PORT}`);
})


// Basic routing
app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})

// If client needs to sends data to the server
// 1. sending data using params
app.get('/greet/:name',(req,res)=>{
    console.log(req.params)
    res.send(`Hello ${req.params.name}`)
})
// http://localhost:8888/greet/Ayush

// 2. sending data using query
app.get('/greet2', (req,res)=>{
    res.send(`Good ${req.query.time} ${req.query.name}`)
})
// http://localhost:8888/greet2?time=morning&name=Ayush


// If client needs to send a file 
app.get('/home',(req,res)=>{
    // res.sendFile('E:/VS Code/PS2_CodingBlocks/Backend/Express.js/index.html')
    res.sendFile(__dirname+'/index.html')
})

// Using Path module
// When we were using __dirname, we might we be confused if we need to add '/' or not
// using path.join(a,b) - it takes 2 parameters and join them. returns a/b
// res.sendFile(path.join(__dirname, 'index.html'))


// if we make any changes in html and css it will be chnaged automatically, we don't have to run server again and again
// if we added a JS file in script tag in the html file, then we have to 
app.get('/server.js',(req,res)=>{
    res.send(`console.log('Here is your requsted JS file')`)
})

// But this is not the best way, because we may need to route more files. SO, we can't do it for all
// easy and convinient way to send JS code
// First create a folder containing your file(html,css,js)
app.use('/file',express.static(path.join(__dirname,'static')))
// make the sure the folder contains index.html file, because this is going to be rendered



// How to send data from webpage to server
// we have already done it using params and query
// now we will use forms to get data

app.use(express.urlencoded({extended:true})) // to read data from body

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'))
})

app.get('/profile',(req,res)=>{
    res.send(`Hello ${req.query.name}`)
})

// IMP: By default the request method is get in forms and it will send the data in url that is unsafe
// So we set the method to post and we also need to send the response using post function in backend

app.post('/profile',(req,res)=>{
    res.send(`Hello ${req.body.name}`)
})

// get will read data from url and post will read data from body