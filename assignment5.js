const http = require("http");
const route = require("./route.js");

const server = http.createServer(route);



server.listen(4000, ()=>{
  console.log("server run on port 4000");
})