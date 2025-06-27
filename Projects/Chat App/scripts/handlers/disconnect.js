module.exports = (socket, io, userMap)=>{
    socket.on('disconnect',()=>{
        let username = userMap[socket.id];
        let socketID = socket.id;
        console.log('User disconnected: ',username);

        if(username){
            delete userMap[socketID]; 

            let activeUsers = [];
            for(let i in userMap) activeUsers.push(userMap[i]);

            socket.broadcast.emit('user-disconnected',{
                username,
                activeUsers
            })
        }
        
    })
}