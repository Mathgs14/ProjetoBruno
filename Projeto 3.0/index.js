'use strict'
//conectar ao banco de dados
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/local')
//importou o express
const express = require('express')
const clienteRouter = require('./src/routers/clienteRouter')
const funcionarioRouter = require('./src/routers/funcionarioRouter')
const produtoRouter = require('./src/routers/produtoRouter')
const vendaRouter = require('./src/routers/vendaRouter')
//criou o app
const app = express()
//definiu a porta
const port =  process.env.port || 1000
//chamando roteadores = importando onde estão :

//Explicando ao APP q vai ser em JSON
app.use(express.json())
//botando para usar os routers
app.use(clienteRouter)
app.use(funcionarioRouter)
app.use(vendaRouter)
app.use(produtoRouter)

//botou a porta para rodar
app.listen(port, () => {
    console.log(`O servidor está executando na porta ${port}`)
})