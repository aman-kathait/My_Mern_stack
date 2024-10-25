//External Module 
const express=require('express');
const app=express();
// Local Module
//const {handler} = require('./RequestHandler');

app.use("/",(req,res, next)=>{
  console.log('First middleware',req.url, req.method);
  next();
})
app.use("/test",(req,res, next)=>{
  console.log('Second middleware',req.url, req.method);
  res.send('<h1>Learning express<h1/>')
  next();
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});