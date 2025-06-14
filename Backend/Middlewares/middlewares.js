const express = require('express');
const app = express();

// Middlewares are functions that Express runs in sequence when a request comes in.
function m1(req,res,next){
    console.log('Running m1');
    next(); // passes control to the next middleware in the chain or the final route handler.
    // Without it, the req would get stuck here, and no response would be sent.
}

// common error using middleware :
// whenever we send a response, make sure that no other response is being sent after that for same request
function m2(req,res,next){
    console.log('Running m2');
    if(req.query.q==1){
        return res.send('Hello world');
    }
    // By sending a response and returning, we ensure 'next()' is not called,
    // preventing any subsequent middlewares or route handlers from attempting to send another response
    // for the same request, which would cause an error.

    next();
}

function m3(req,res,next){
    console.log('Running m3');
    next();
}

// These are global middlewares, they will run for every route 
app.use(m1);
app.use(m2);
app.use(m3);

// example of a middleware that we were using but didn't know was a middleware
app.use(express.urlencoded({extended:true})); 

// The middlewares defined with app.use() (m1, m2, m3) will run BEFORE this handler.
app.get('/',(req,res)=>{
    res.send('Learning middlewares');
})


// Middlewares in depth: Execution Flow
// (demonstrates the "stack" nature of middleware execution)

function m10(req,res,next){
    console.log('Pre running m10');
    next();
    console.log('Post running m10');
}

function m20(req,res,next){
    console.log('Pre running m20');
    next();
    console.log('Post running m20');
}

function m30(req,res,next){
    console.log('Pre running m30');
    next();
    console.log('Post running m30');
}

// app.use(m10);
// app.use(m20);
// app.use(m30);
// if we don't wanna use app.use() again and again, we can directly pass them in route handler method

app.get('/home', m10, m20, m30, (req,res)=>{
    console.log('Pre sending response')
    res.send('Home page')
    console.log('Post sending response')
})
// now m10, m20, and m30 will only run on this route('/home).

// This is the expected output sequence we will get
// Pre running m10
// Pre running m20
// Pre running m30
// Pre sending response
// Post sending response
// Post running m30
// Post running m20
// Post running m10
// When 'next()' is called, the current middleware pauses. After the next task finishes,
// the paused middleware resumes, letting it do things both before and after the main action.


app.listen(8080,()=>{
    console.log('Server at http://localhost:8080')
})
