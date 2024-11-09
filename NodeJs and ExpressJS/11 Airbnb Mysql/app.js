// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const { hostRouter } = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require("./util/path-util");
const errorController = require('./controllers/errorController');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const airbnbDb=require('./util/database-util');
const { log } = require("console");

airbnbDb.execute("SELECT * FROM homes").then(([rows,field])=>{
  console.log(rows);
})

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(errorController.get404);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});