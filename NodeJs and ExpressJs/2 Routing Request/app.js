const http = require("http");
const fs=require('fs');
console.log("I was here");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Document</title>
    </head>
    <body>
      <h1>Welcome to First Service</h1>
      <form action="/buy-product" method="POST">
        <input type="text" placeholder="Enter product name" name="product">
        <br/>
        <hr/>
      <input type="text" placeholder="Enter product budget" name="budget">
      <input type="submit">
      </form>
    </body>
    </html>
    `);
  } else if (req.url==="/buy-product") {
    console.log("Form data submitted");
    const arr=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      arr.push(chunk);
    });

    req.on('end',()=>{
      const body=Buffer.concat(arr).toString();
      const urlParms=new URLSearchParams(body);
      const bodyJson={};
      for (const [key,value] of urlParms.entries()){
        bodyJson[key]=value;
      }
      fs.writeFileSync('buy.txt',JSON.stringify(bodyJson));
    });
   
    res.statusCode=302;
    res.setHeader('Location','/products')
  }
  
  else if (req.url === "/products") {
    res.write(`
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Product</title>
        </head>
        <body>
          <h1>Welcome to Product Page</h1>
        </body>
      </html>
      `);
  } else {
    res.statusCode=404;
    res.write(`
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <title>Error</title>
          </head>
          <body>
            <h1>404 Error</h1>
          </body>
        </html>
        `);
  }
  res.end();
};

const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: https//localhost:${3001}`);
});
