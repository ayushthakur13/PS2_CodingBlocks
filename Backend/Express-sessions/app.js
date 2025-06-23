const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'randomid',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: 'mongodb://127.0.0.1:27017/expressSessionData'})
}));

app.get('/',(req,res)=>{
    res.redirect('/login')
})

app.get('/signup',(req,res)=>{
    res.render('signup');

})

app.post('/signup',(req,res)=>{
    const {username, password} = req.body;
    req.session.username = username;
    req.session.password = password;

    // console.log(req.session);
    res.redirect('login');
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',(req,res)=>{
    const {username, password} = req.body;
    if(username === req.session.username && password === req.session.password)
        return res.redirect('/profile');
    res.send('Login failed');
})

app.get('/profile',(req,res)=>{
    if(req.session.username){
        res.render('profile',{
            username: req.session.username,
            password: req.session.password
        });
    }
    else res.redirect('/login');
})

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})
