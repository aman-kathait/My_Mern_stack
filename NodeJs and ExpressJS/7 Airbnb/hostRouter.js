const path=require('path');
const express=require('express');
//const rootDir=require('./util/path-util');

const hostRouter=express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"views","add-home.html")); 
});

hostRouter.post("/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"views","home-added.html")); 
})

module.exports=hostRouter;