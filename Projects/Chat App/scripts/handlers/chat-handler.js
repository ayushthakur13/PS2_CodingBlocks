module.exports = (socket, io, userMap)=>{
    socket.on('chatmsg',(text, cb)=>{
        // console.log(text.msg);
        cb({
            status:'Message recieved'
        });
        io.emit('msg',{
            msg: text.msg,
            senderName: userMap[socket.id]
        });
    })
}