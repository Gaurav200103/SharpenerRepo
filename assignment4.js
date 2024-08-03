const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res)=>{
  if(req.url == "/"){
    let message= fs.readFileSync("message.txt", {encoding: "utf-8"});

    res.write("<html>")
    res.write("<meta><title>form data</title></meta>")
    
    res.write(`<body><h1>${message}<h1><form action='/message' method='POST'><input type='text' name='message' /><button>submit</button></form></body>`)
    res.write("</html>")

    return res.end();
  }

  if(req.method == "POST"){
    const body = [];
    req.on("data", (chunk)=>{
      body.push(chunk);
    })
    req.on("end", ()=>{
      let parseBody = Buffer.concat(body).toString();
      let message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);

    })
    

    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  }
  res.end();
})


function myfun(event){
  event.preventDefault();

  console.log(event);
}


server.listen(4000, ()=>{
  console.log("server run on port 4000");
})