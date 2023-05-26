const DbArt = require('../database/database')

const carrinho = [
    {
      id: 1,
      titulo: "Camiseta",
      preco: 49.90,
      cores: [
        {
          codigo:"cmpreta",
          img: "../src/public/img/camiseta-preta.png",
        },
        {
          codigo:"cmbranca",
          img: "../src/public/img/camiseta-branca.png",
        },
      ],
    },
    {
      id: 2,
      titulo: "Caneca",
      preco: 19.00,
      cores: [
        {
          codigo:"cnbranca",
          img: "../src/public/img/canecas-brancas.png",
        },
        {
          codigo:"cncinza",
          img: "../src/public/img/canecas-cinzas.png",
        },
      ],
    },
  
  
  ];


function requererTodosProdutos () {


    return carrinho

  
};


module.exports = {requererTodosProdutos};
