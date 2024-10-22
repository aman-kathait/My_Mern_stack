const http = require("http");
const {handler}=require('./requestHandler')
const server = http.createServer(handler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: https//localhost:${3001}`);
});
