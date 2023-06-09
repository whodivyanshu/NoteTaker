const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const md5 = require("md5")
const app = express();

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URL = "mongodb+srv://divyanshu21:4998@notesapp.4xypqvg.mongodb.net/?retryWrites=true&w=majority"

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
    password: String,
    notes: [{
      title: String,
      content: String
    }]
})

const User = mongoose.model("User", userSchema);




app.get("/getData", async(req,res)=>{
  const allData = await User.find();
  // const jsonData = JSON.stringify(allData);
  res.send(allData);
})

app.post("/signin", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find user with matching username
      const user = await User.findOne({ username });
      if (!user) {
        // If user not found, return error response
        return res.status(401).json({ message: "Invalid username or password" });
      }
      
      // If user is found, check the password
      if (user.password !== md5(password)) {
        // If password is incorrect, return error response
        return res.status(401).json({ message: "Invalid username or password" });
      }
  
      // If both username and password are correct, return success response
      res.status(200).json({ message: "Sign in successful" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.post("/notesubmit", async(req,res)=>{
    const {username, title, content} = req.body;

    try{
      const user = await User.findOne({username});
      if(!user){
        return res.status(401).json({message: "Try Again"});
      }
      const newNote = {title, content};
      user.notes.push(newNote);
      await user.save();

      res.status(200).json({message: "Note added successfully!"});


    }catch(error){
      res.status(500).json({message: error.message});
      console.log(error);
    }
    

  })


  app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      } else {
        const newUser = new User({
          _id: uuid.v4(),
          username: username,
          password: md5(password),
        });
        await newUser.save();
        return res.status(201).json({ message: "User created successfully" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  
  

app.listen(4000, ()=>{
    console.log("server started at port 4000");
})
