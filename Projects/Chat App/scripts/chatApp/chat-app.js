let userMap = {};

module.exports = (socket, io)=>{
    // console.log('Connection requested by a client: ', socket.id);
    socket.emit('Welcome',{
        msg:'Hello World'
    });

    socket.on('thankyou',(msg, cb)=>{
        console.log(msg);
        cb({status:'thank you event successful'});
    })

    const userHandler = require('../handlers/user-handler');
    userHandler(socket, io, userMap);

    const chatHandler = require('../handlers/chat-handler');
    chatHandler(socket, io, userMap);
    
    const disconnectHandler = require('../handlers/disconnect');
    disconnectHandler(socket, io, userMap);
    
}
