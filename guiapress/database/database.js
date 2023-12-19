const Sequelize = require('sequelize')

const connection = new Sequelize('guiapress', 'root', 'H&nrique10', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection