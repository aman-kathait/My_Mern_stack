const path=require('path');

const express=require('express');
const bodyParser=require('body-parser');

const hostRouter=require("./hostRouter");
const storeRouter=require("./storeRouter");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(storeRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
  res.statusCode=404;
  res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Page Not Found</title>
      </head>
      <body>
        <h1>404 Page Not Found</h1>
      </body>
      </html>
    `);
    res.end();
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});