'use strict';

// Importando o módulo express para lidar com rotas HTTP
const express = require('express');

// Criando um roteador express
const funcionarioRouter = express.Router();

// Importando o controlador funcionarioController
const funcionarioController = require('../controllers/funcionarioController');

// Rota para manipulação de funcionários
funcionarioRouter.route('/api/funcionario')
    // Rota GET para obter todos os funcionários
    .get((req, res) => {
        funcionarioController.getFuncionarios(req, res);
    })
    // Rota POST para criar um novo funcionário
    .post((req, res) => {
        funcionarioController.createFuncionario(req, res);
    })
    // Rota PUT para atualizar um funcionário existente
    .put((req, res) => {
        funcionarioController.updateFuncionario(req, res);
    });

// Rota para manipulação de um funcionário específico pelo ID
funcionarioRouter.route('/api/funcionario/:id')
    // Rota GET para obter um funcionário pelo ID
    .get((req, res) => {
        funcionarioController.getFuncionario(req, res);
    })
    // Rota DELETE para deletar um funcionário pelo ID
    .delete((req, res) => {
        funcionarioController.deleteFuncionariosById(req, res);
    });

// Exportando o roteador funcionarioRouter para ser utilizado em outras partes da aplicação
module.exports = funcionarioRouter;
