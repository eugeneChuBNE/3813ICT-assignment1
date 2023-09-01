module.exports = {
    connect: function(io, PORT){
        io.on('connection',(socket)=>{
            //when a connection request comes in output to the server console
            console.log('user connection on poirt ' + PORT + ' : ' + socket.id);
            socket.on('message',(message)=>{
                io.emit('message', message);
            })
        });
    }
}