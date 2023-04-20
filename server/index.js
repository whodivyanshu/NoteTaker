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
    password: String
})

const User = mongoose.model("User", userSchema);

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

  app.post("/signup", async (req,res)=>{
    const {username, password} = req.body;
    try{
      const user = await User.find({username});
      if(!user){
        const newUser = new User({
          username: username,
          password: md5(password),
        })
        newUser.save();
        return res.status(200);
      }
      else{
        return res.status(401);
      }
    }
    catch(err){
      console.log(err);
    }


  })
  
  

app.listen(4000, ()=>{
    console.log("server started at port 4000");
})
