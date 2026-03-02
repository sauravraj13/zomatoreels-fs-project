// this file is for creating server and server.js is for starting server
const express = require('express');


const app = express();

app.get("/", (req,res)=>{
    res.send("hello world");
})
module.exports = app;