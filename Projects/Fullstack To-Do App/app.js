const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

const { mongoConnect } = require('./database/database');

const { v4: uuidv4 } = require('uuid'); 
// wehenever we'll call uuidv4(), it will give a unique id

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json()); // otherwise axios req could not be read

const reqHandler = require('./routes/todo');
app.use('/',reqHandler);

mongoConnect()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server started at http://localhost:${PORT}`);
        })
    })
    .catch((err)=>{
        console.log('Cannot connect to the app because DB is not working');
    })
