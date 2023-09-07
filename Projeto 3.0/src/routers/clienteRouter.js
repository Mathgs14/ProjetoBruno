'use strict'

const express = require('express')
const clienteRouter = express.Router()
const clienteController = require('../controllers/clienteController')


clienteRouter.route('/api/cliente')
//roteador somente roteia(obvio) quem resolver é o controller
//o roteador vai pegar os parametros passados > jogar para os controladores, ai sim vai ser resolvido o metodo
.get((req, res) =>{
    clienteController.getClientes(req,res)
  
})

.post((req,res) =>{
    clienteController.createCliente(req,res)
  
})

.put((req,res)=>{
    clienteController.updateCliente(req,res)
 
})
clienteRouter.route('/api/cliente/:id')
.get((req,res)=>{
    clienteController.getCliente(req,res)
})
.delete((req,res)=>{
    clienteController.deleteClientesById(req,res)
})
module.exports = clienteRouter









