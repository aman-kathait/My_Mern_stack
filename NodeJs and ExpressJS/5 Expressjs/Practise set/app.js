const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("First Middleware");
  next();
});

app.use("/", (req, res, next) => {
  console.log("Second Middleware");
  next();
});

app.use("/third", (req, res, next) => {
  console.log("Third Middleware");
  res.send(`<h1>Response from third middleware<h1/>`);
});

app.use("/contactus", (req, res, next) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    <form action="/contactusdetails" method="POST">
      <input type="text" placeholder="Enter your name" name="username">
      <input type="text" name="email" id="" placeholder="Enter your email">
      <input type="submit">
    </form>
    </body>
    </html>`);
});
app.post("/contactusdetails",(req, res, next) => {
  res.send(`<h1>Response from last middleware<h1/>`);
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
