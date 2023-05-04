const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require('uuid');

app.set("view engine", "ejs");


app.get("/", (req, res) =>{
    res.redirect(`/${uuidv4()}`)
   
})


app.get("/:roomId", (req, res) =>{
    const roomId =  req.params.roomId
    res.render("room", {
        roomId : roomId
    })
})

PORT =  process.env.PORT || 3000;
server.listen(PORT, ()=> console.log(`Servering listening at port:${PORT}`));

