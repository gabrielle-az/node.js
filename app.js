const express = require('express')

const app = express()

const port = 3333

app.set("views", __dirname + "/views");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("login");
})

app.listen(port, () => {
  console.log('Servidor iniciado')
})

