const express = require('express')
const app = express()

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // res.render('principal/perfil') // Qunado o arquivo html se encontra em outra pasta
  res.render("index")
})

app.listen(8080, () => { console.log("App rodando!") })