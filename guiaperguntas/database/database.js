const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', 'H&nrique10', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection