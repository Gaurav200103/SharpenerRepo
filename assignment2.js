const http = require("http");

let server = http.createServer((req, res)=>{
  res.end("gaurav pimplekar");
});


server.listen(4000, ()=>{
  console.log("gaurav pimplekar")
})