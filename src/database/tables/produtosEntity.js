const { DataTypes } = require('sequelize')

const DbArt = require('../database')
const DbArt = require('../database')


DbArt.define('produtos', {
    titulo: DataTypes.STRING,
    preco: DataTypes.STRING,
    cores: DataTypes.STRING
})