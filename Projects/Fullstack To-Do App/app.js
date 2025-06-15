const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

const { v4: uuidv4 } = require('uuid'); 
// wehenever we'll call uuidv4(), it will give a unique id

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json()); // otherwise axios req could not be read

let todos = [];

app.get('/gettodos',(req,res)=>{
    res.send(todos)
})

app.post('/addtodo',(req,res)=>{
    const {name} = req.body;
    todos.push({
        id:uuidv4(),
        name
    });
    res.redirect('/gettodos');
})

app.post('/deletetodo',(req,res)=>{
    const {id} = req.body;
    todos = todos.filter((task)=>{
        if(task.id === id) return false;
        return true;
    })
    res.redirect('/gettodos')
})

app.get('/increase',(req,res)=>{
    const {id} = req.query;
    let index;
    todos.forEach((e,i)=>{
        if(e.id == id) index = i;
    })
    // swap
    let temp = todos[index]
    todos[index] = todos[index-1]
    todos[index-1] = temp

    // res.send('You asked to increase the priority');
    res.redirect('/gettodos');
})

app.get('/decrease',(req,res)=>{
    const {id} = req.query;
    let index;
    todos.forEach((e,i)=>{
        if(e.id == id) index = i;
    })
    // swap
    let temp = todos[index]
    todos[index] = todos[index+1]
    todos[index+1] = temp

    // res.send('You asked to decrease the priority');
    res.redirect('/gettodos');
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})
