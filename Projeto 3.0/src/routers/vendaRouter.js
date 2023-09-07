'use strict'

const express = require('express')
const vendaRouter = express.Router()
const vendaController = require('../controllers/vendaController')


vendaRouter.route('/api/venda')

.get((req, res) =>{
    vendaController.getVendas(req,res)
   
})

.post((req,res) =>{
    vendaController.createVenda(req,res)
   
})

.put((req,res)=>{
    vendaController.updateVenda(req,res)
   
})
vendaRouter.route('/api/venda/:id').get((req,res)=>{
    vendaController.getVenda(req,res)
})

vendaRouter.route('/api/venda/:id').delete((req,res)=>{
    vendaController.deleteVendaById(req,res)
})
module.exports = vendaRouter









