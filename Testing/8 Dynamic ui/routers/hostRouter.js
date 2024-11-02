const path=require('path');
const express=require('express');
const rootDir=require('../util/path-util');

const hostRouter=express.Router();

hostRouter.get("/add-home",(req,res,next)=>{
  res.render("/add-home",{pageTitle:'Host your home'}); 
});
const registeredHomes=[];
hostRouter.post("/add-home",(req,res,next)=>{
  registeredHomes.push(req.body);
  res.render("home-added",{pageTitle:'Home added successfully'}); 
})
exports.hostRouter=hostRouter;
exports.registeredHomes=registeredHomes;