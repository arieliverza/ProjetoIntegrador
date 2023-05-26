require('dotenv').config()

const { Sequelize } = require('sequelize')

const DbArt = new Sequelize(
    'dbart',
    'root',
    '',
{
    host: 'localhost',
    dialect: 'mysql'
    }
)

module.exports = DbArt