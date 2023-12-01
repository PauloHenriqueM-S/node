const express = require('express') // Importando o express
const app = express() // Iniciando o express

app.get("/", (req, res) => {
  res.send("<h1>Bem vindo ao guia do programador</h1>")
})

app.get("/blog/:artigo?", (req, res) => {

  const artigo = req.params.artigo
  if (artigo) {
    res.send(`<h2>Artigo: ${artigo} </h2>`)
  } else {
    res.send("<h3>Bem vindo ao meu blog!: www.guiadoprogramador.com</h3>")
  }
})

app.get("/canal/youtube", (req, res) => {
  res.send("<h1>Bem vindo ao meu canal!</h1>")
})

app.get("/ola/:nome/:empresa", (req, res) => {
  // REQ =>  DADOS ENVIADOS PELO USUÁRIO
  // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
  const nome = req.params.nome
  const empresa = req.params.empresa
  res.send(`<h1> Oi ${nome} do ${empresa}</h1>`)
})

app.listen(4000, function (error) {
  if (error) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
})
