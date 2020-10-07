const express=require('express'); 
const router =express.Router();
const Post=require("../models/Post");

// get backs all the post
router.get("/", async (req,res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err){
        res.json({mesage:err});
    }
  
}); 

// submits a post
router.post("/", async (req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description,
    });
   try{
       const savedpost=await post.save();
       res.json(savedpost);
   }catch(err){
       res.json({message:err});
   }
}); 

// Specific post

router.get("/:postId",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }


});

//Delete post
router.delete("/:postId",async(req,res)=>{
    try{
        const removepost=await Post.remove({_id:req.params.postId});
        res.json(removepost);

    }catch(err){
        res.json({message:err});
    }
});



module.exports=router;