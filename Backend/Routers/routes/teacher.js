// We use express.Router() to handle these routes separately and keep code modular.
// These routes will be used in the main app with app.use('/routeName', thisRouter).
// Note: Routers do not run app.listen(); only the main server file does that.

const express = require('express');
const router = express.Router(); 

const teachers = [
    'Kartik',
    'Varun',
    'Monu'
];

router.get('/',(req,res)=>{
    res.send(teachers);
})

router.post('/add',(req,res)=>{
    const {name} = req.body;
    teachers.push(name);
    res.redirect('/teacher');
})

// Makes router usable in main file
module.exports = router;
