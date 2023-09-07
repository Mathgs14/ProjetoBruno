'use strict'

const express = require('express')
const funcionarioRouter = express.Router()
const funcionarioController = require('../controllers/funcionarioController')


funcionarioRouter.route('/api/funcionario')
//roteador somente roteia(obvio) quem resolver é o controller
//o roteador vai pegar os parametros passados > jogar para os controladores, ai sim vai ser resolvido o metodo
.get((req, res) =>{
    funcionarioController.getFuncionarios(req,res)
  
})

.post((req,res) =>{
    funcionarioController.createFuncionario(req,res)
  
})

.put((req,res)=>{
    funcionarioController.updateFuncionario(req,res)
 
})
funcionarioRouter.route('/api/funcionario/:id')
.get((req,res)=>{
    funcionarioController.getFuncionario(req,res)
})
.delete((req,res)=>{
    funcionarioController.deleteFuncionariosById(req,res)
})
module.exports = funcionarioRouter