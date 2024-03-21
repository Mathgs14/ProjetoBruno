// Importando a biblioteca mongoose
const mongoose = require('mongoose')

// Importando o Schema do mongoose
const Schema = mongoose.Schema

// Definindo o esquema do produto
const produtoSchema = new Schema({
    name: { type: String, required: true }, // Nome do produto (obrigatório)
    id: { type: Number, required: true, unique: true }, // ID único do produto (obrigatório e único)
    price: { type: Number, required: true }, // Preço do produto (obrigatório)
})

// Criando um modelo a partir do esquema definido, chamando-o de "produtoModel"
module.exports = mongoose.model("produtoModel", produtoSchema)
