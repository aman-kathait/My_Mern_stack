const path=require('path');
const express=require('express');
const rootDir=require("../util/path-util");
const storeRouter=express.Router();
const {registeredHomes}=require('./hostRouter');
storeRouter.get("/",(req,res,next)=>{
  console.log(registeredHomes);
  res.render('index',{homes: registeredHomes, pageTitle:'Hamara Airbnb'}); 
});
module.exports=storeRouter;