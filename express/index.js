const express = require('express') // Importando o express
const app = express() // Iniciando o express

app.get("/", (req, res) => {
  res.send("Bem vindo ao guia do programador")
})

app.get("/blog", (req, res) => {
  res.send("Bem vindo ao meu blog!")
})

app.get("/canal/youtube", (req, res) => {
  res.send("<h1>Bem vindo ao meu canal!</h1>")
})

app.listen(4000, function (error) {
  if (error) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
})
