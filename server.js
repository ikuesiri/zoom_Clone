const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require('uuid');
const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.redirect(`/${uuidv4()}`)
})

app.get("/:roomId", (req, res) =>{
    const roomId =  req.params.roomId
    res.render("room", {
        roomId
    })
})

io.on("connection", socket => {
    //socket "on" method listens to the event form the client side
    socket.on("join-room", (roomId)=>{
        socket.join(roomId); // this will add the new user to the "roomId" room.
        socket.broadcast.to(roomId).emit("user-connected"); 
        // This emits an event to all users in the room that a new user has joined 
        //(But the new Member doesn't see this event)
    })
})



PORT =  process.env.PORT || 3000;
server.listen(PORT, ()=> console.log(`Servering listening at port:${PORT}`));

