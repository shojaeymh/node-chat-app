var socket = io();
socket.on('connect',()=>{
        console.log("connected to server!");        
        socket.emit('createMessage',{
            from: 'ali',
            text: 'yoooooo'

        });

});
socket.on('disconnect',()=>{
    console.log("disconnected from server");

});



socket.on('newMessage',(nmessage)=>{
    console.log(nmessage);
    
});