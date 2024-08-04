const express = require("express");
const { LocalStorage } = require("node-localstorage");
const fs = require("fs");
const localStorage = new LocalStorage("./scratch");
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.send(`<form action="/add-user" method="POST">
      <input type="text" name="username"/>
      <button type="submit">login</button>
    </form>`)
})

app.post("/add-user", (req, res) => {
  let user = req.body.username;
  localStorage.setItem("username", user);

  console.log(localStorage.getItem("username"), req.body);
  res.redirect("/");
  // res.send();
})

app.get("/", (req, res) => {

  let oldMessage = fs.readFileSync("message.txt", { encoding: "utf-8" });
  let message = oldMessage + (localStorage.getItem("username") + ":" + req.query.chat);
  if (req.query.chat != undefined) {
    

    console.log(localStorage.getItem("username"));
    fs.writeFileSync("message.txt", JSON.stringify(message));
  }

  res.send(`
      <form action="/" method="GET" >
        <p>${message}</p>
        <input type="text" name="chat" />
        <button type="submit">send</button>
      </form>
    `);
})




app.listen(3000);