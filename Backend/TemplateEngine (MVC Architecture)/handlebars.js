const express = require('express');
const app = express();
// const hbs = require('hbs');
const path = require('path');

const PORT = 8888

// Setting up hbs engine
app.set('view engine','hbs')

// By default it tries to look for hbs content in views folder
// if you want to change the name from views to something else:
// app.set('views','hbsFolder')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

// rendering data in hbs
app.get('/hbs',(req,res)=>{
    res.render('index.hbs',{
        title: 'Handlebars',
        
    })
})

app.listen(PORT, (err)=>{
    if(err) return console.log('Server failed');
    console.log(`Server started at http://localhost:${PORT}`);
})
