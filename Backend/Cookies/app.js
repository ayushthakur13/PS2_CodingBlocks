const express = require('express');
const app = express();
const PORT = 4444;
const cookie = require('cookie');

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{

    let myCookie = cookie.parse(req.headers.cookie || '');

    if(myCookie.loggedIn) return res.redirect('/profile');
    res.redirect('/login');
});

app.get('/login',(req,res)=>{

    let myCookie = cookie.parse(req.headers.cookie || '');
    if(myCookie.loggedIn) return res.redirect('/profile');

    res.setHeader('Set-Cookie', cookie.serialize(
        'loggedIn',
        Boolean(true),
        {
            httpOnly:true,
            maxAge: 20 // 20 sec
        }
    ));
    res.send('This is the login page');
})

app.get('/profile',(req,res)=>{

    let myCookie = cookie.parse(req.headers.cookie || '');

    if(myCookie.loggedIn) return res.send('Welcome to my application');
    res.redirect('/login');
});

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})
