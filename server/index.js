const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const app = express();

app.use(cors());


const MONGODB_URL = "mongodb+srv://divyanshu21:8385@notesapp.qiog12x.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    _id: String,
    username: String,
    password: String

})

const User = mongoose.model("User", userSchema);

app.post("/login", (req,res)=>{
    const newUser = new User({
        _id: uuid.v4(),
        name: req.body.username,
        password: req.body.password
    })
    newUser.save();
    res.send({status: "ok"});
});



app.get("/", (req,res)=>{
    res.send("hello world");
})



app.listen(4000, ()=>{
    console.log("server started at port 4000");
})
