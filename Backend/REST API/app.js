// REST = Represntational State Transfer
// API = Application Programming Interface

// It is an architecture followed between client and server to communicate

// Methods of REST API
// CRUD operations between client and server
// C: POST Request
// R: GET Request
// U: PUT Request
// D: DELETE Request

// Status Code
// 200: OK
// 400: error on client side
// 500: error on server side

const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

const methodOverride = require('method-override');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));

let students = [
    {id: 1, name: 'ayush'},
    {id: 2, name: 'abc'},
    {id: 3, name: 'xyz'}
]

app.get('/students',(req,res)=>{
    res.status(200).send(students);
})

app.get('/students/:id',(req,res)=>{
    const {id} = req.params;
    let stud = students.filter(s=> s.id == id)

    if(stud.length == 0) res.status(400).send('Student not found');
    else res.status(200).send(stud);
})

app.post('/students',(req,res)=>{
    const {id} = req.body;
    const {name} = req.body;

    students.push({id, name});
    res.status(200).send(students);
})

// updating a students name using put request
app.put('/students/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;

    students = students.map((s)=>{
        if(s.id == id) return {id: s.id, name};
        return s;
    })

    res.status(200).send(students);
})

// deleting a student using delete request
app.delete('/students/:id',(req,res)=>{
    const {id} = req.params;

    students = students.filter((s)=>{
        if(s.id == id) return false;
        else return true
    })

    res.status(200).send(students);
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})
