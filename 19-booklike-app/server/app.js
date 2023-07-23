const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require("socket.io");


app.get('/', (req, res) => {
  res.send('<h1>Selam</h1>');
});

const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "OPTIONS"]
    }
  });


server.listen(1212, () => {
    io.on("connection", socket => {
        // console.log(socket);
        console.log("Socket.io starting to listen");
        console.log(socket.id);

        socket.join("123");

        // ! Karşılama mesajı
        socket.emit("WELCOME_MESSAGE",`Ooooo ${socket.id} kardeşim ojgeldin bea.`);
        
        socket.on("SEND_MESSAGE",(data) => {
            console.log(data);
        })

        socket.on("NEW_BOOKMARK_EVENT",(bookmark) => {
          // io.emit("NEW_BOOKMARK_ADDED",bookmark); // ! All of the listeners
          socket.broadcast.emit("NEW_BOOKMARK_ADDED",bookmark); // ! All of  the listener except sender
           console.log("Yeni Bookmark Geldi",bookmark);
        })
        
    });

  console.log('listening on *:1212');
});