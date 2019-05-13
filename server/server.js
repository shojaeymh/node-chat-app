const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

var adress = path.join(__dirname,'..','public');
const port = process.env.port || 3000;


var app = express();
var server = http.createServer(app);
var io =socketio(server);



app.use(express.static(adress));

io.on('connection',(socket)=>{
    console.log('new user connected');
;
    socket.emit('newMessage',{
        from: 'Mamad',
        text: 'hey you',
        createdAt: 1234

    });



    socket.on('disconnect',()=>{
        console.log('user disconnected!');
    });

    socket.on('createMessage',(newmessage)=>{
        console.log(newmessage);
    });


    
});


server.listen(port,()=>{
    console.log('server is up on port: '+port);
});