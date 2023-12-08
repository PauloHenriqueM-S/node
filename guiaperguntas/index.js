const express = require('express')
const app = express()

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs')

app.get('/:nome/:lang', (req, res) => {
  var nome = req.params.nome
  var lang = req.params.lang
  var exibirMsg = true
  // res.render('principal/perfil') // Qunado o arquivo html se encontra em outra pasta
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do programador",
    inscritos: 8000,
    msg: exibirMsg
  })
})

app.listen(8080, () => { console.log("App rodando!") })