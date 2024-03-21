'use strict';

// Importando o módulo express para lidar com rotas HTTP
const express = require('express');

// Criando um roteador express
const vendaRouter = express.Router();

// Importando o controlador vendaController
const vendaController = require('../controllers/vendaController');

// Rota para manipulação de vendas
vendaRouter.route('/api/venda')
    // Rota GET para obter todas as vendas
    .get((req, res) => {
        vendaController.getVendas(req, res);
    })
    // Rota POST para criar uma nova venda
    .post((req, res) => {
        vendaController.createVenda(req, res);
    })
    // Rota PUT para atualizar uma venda existente
    .put((req, res) => {
        vendaController.updateVenda(req, res);
    });

// Rota para manipulação de uma venda específica pelo ID
vendaRouter.route('/api/venda/:id')
    // Rota GET para obter uma venda pelo ID
    .get((req, res) => {
        vendaController.getVenda(req, res);
    })
    // Rota DELETE para deletar uma venda pelo ID
    .delete((req, res) => {
        vendaController.deleteVendaById(req, res);
    });

// Exportando o roteador vendaRouter para ser utilizado em outras partes da aplicação
module.exports = vendaRouter;
