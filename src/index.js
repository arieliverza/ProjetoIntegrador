const express = require('express');
const index = express();
const {requererTodosProdutos} = require('./controllers/produtos.controllers')
const path = require('path');
const DbArt = require('./database/database')

const produtosEntity = require('../database/tables/produtosEntity')


try{
    
    DbArt.authenticate();
    
    DbPArt.sync();
}
catch(error) {
    
    console.error(error);
}


index.set('views', path.join(__dirname, 'views'))
index.set('view engine', 'ejs')

index.get('/produtos', requererTodosProdutos)


index.listen('12345', () => {
    console.log('Servidor Funcionando');
});