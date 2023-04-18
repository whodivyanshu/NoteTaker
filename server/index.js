const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();

app.get("/", (req,res)=>{
    res.send("hello world");
})



app.listen(4000, ()=>{
    console.log("server started at port 4000");
})
