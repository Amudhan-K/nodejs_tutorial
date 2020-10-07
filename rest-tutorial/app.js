const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("dotenv/config");
const bodyParser=require("body-parser");

app.use(bodyParser.json());

// Import routes
const postsRoute=require("./routes/posts");


app.use("/posts",postsRoute);


// Routes
app.get("/",(req,res)=>{
    res.send("we are on home")
}); 

  
// connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser:true },
()=>console.log("connected to DB"));
  
// how to start listening
app.listen(3000);
