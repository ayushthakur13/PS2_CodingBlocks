const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const PORT = 4444;

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.get('/chat',(req,res)=>{
    res.render('chat');
})

const onConnection = (socket)=>{
    require('./scripts/chatApp/chat-app')(socket, io);
}

io.on('connection',onConnection)

httpServer.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});
