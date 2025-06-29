require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4444;
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');
const passport = require('./auth/passport');
const hbs = require('hbs');

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(flash());


const mongoUrl = process.env.MONGO_URL;
const sessionSecret = process.env.SESSION_SECRET;

app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl})
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.redirect('/login')
})

const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const profileRoute = require('./routes/profile');
// const shopRoute = require('./routes/shop');
const addProductRoute = require('./routes/admin');

app.use('/signup',signupRoute);
app.use('/login',loginRoute);
app.use('/profile',profileRoute);
// app.use('/shop',shopRoute);
app.use('/admin',addProductRoute);


app.get('/logout',(req,res,next)=>{
    req.logout((err)=>{
        if (err) return next(err);
        res.redirect('/login');
    });
})

mongoose.connect(mongoUrl)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server started at http://localhost:${PORT}`);
        })
    })
    .catch((err)=>{
        console.log('Cannot connect to DB');
    })
