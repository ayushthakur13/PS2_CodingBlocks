const express = require('express');
const app = express();

const path = require('path');
const PORT = 4444;

app.use(express.urlencoded({extended:true}));

// Importing router modules for modular routing
const teacherHandler = require('./routes/teacher');
app.use('/teacher',teacherHandler);

const studentHandler = require('./routes/student');
app.use('/student',studentHandler);


// Routers cannot use app.listen(); only the main app file should start the server.
app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})
