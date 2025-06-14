const express = require('express');
const app = express();
const PORT = 8888

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

let taskList = [];

app.get('/',(req,res)=>{
    res.render('index',{
        title:'To-Do using HBS',
        taskList
    })
})

app.post('/addtask',(req,res)=>{
    taskList.push(req.body.task);
    res.redirect('/'); // This will reload the page whenever an item is added in list
})

app.listen(PORT, (err)=>{
    if(err) return console.log('Server failed');
    console.log(`Server started at http://localhost:${PORT}`);
})
