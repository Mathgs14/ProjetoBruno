'use strict';

// Importando o módulo express para lidar com rotas HTTP
const express = require('express');

// Criando um roteador express
const produtoRouter = express.Router();

// Importando o controlador produtoController
const produtoController = require('../controllers/produtoController');

// Rota para manipulação de produtos
produtoRouter.route('/api/produto')
    // Rota GET para obter todos os produtos
    .get((req, res) => {
        produtoController.getProdutos(req, res);
    })
    // Rota POST para criar um novo produto
    .post((req, res) => {
        produtoController.createProduto(req, res);
    })
    // Rota PUT para atualizar um produto existente
    .put((req, res) => {
        produtoController.updateProduto(req, res);
    });

// Rota para manipulação de um produto específico pelo ID
produtoRouter.route('/api/produto/:id')
    // Rota GET para obter um produto pelo ID
    .get((req, res) => {
        produtoController.getProduto(req, res);
    })
    // Rota DELETE para deletar um produto pelo ID
    .delete((req, res) => {
        produtoController.deleteProdutosById(req, res);
    });

// Exportando o roteador produtoRouter para ser utilizado em outras partes da aplicação
module.exports = produtoRouter;
