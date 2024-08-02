const http = require("http");

let server = http.createServer((req, res)=>{
  let task = req.url;

  if(task == "/home"){
    res.end("Welcome to home");
  }
  else if(task == "/about"){
    res.end("Welcome to about us page");
  }
  else{
    res.end("Welcome to my Node js project");
  }

  // console.log(task);
})

server.listen(4000, ()=>{
  console.log("server run on port 4000");
})