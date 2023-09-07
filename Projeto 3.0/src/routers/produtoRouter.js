'use strict'

const express = require('express')
const produtoRouter = express.Router()
const produtoController = require('../controllers/produtoController')


produtoRouter.route('/api/produto')

.get((req, res) =>{
    produtoController.getProdutos(req,res)
    
})

.post((req,res) =>{
    produtoController.createProduto(req,res)
   
})

.put((req,res)=>{
    produtoController.updateProduto(req,res)
  
})
produtoRouter.route('/api/produto/:id')
.get((req,res)=>{
    produtoController.getProduto(req,res)
})
.delete((req,res)=>{
    produtoController.deleteProdutosById(req,res)
})
module.exports = produtoRouter









