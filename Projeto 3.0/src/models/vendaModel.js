// Importando a biblioteca mongoose
const mongoose = require('mongoose')

// Importando o Schema do mongoose
const Schema = mongoose.Schema

// Definindo o esquema da venda
const vendaSchema = new Schema({
    name: { type: String, required: true }, // Nome do item vendido (obrigatório)
    id: { type: Number, required: true, unique: true }, // ID único da venda (obrigatório e único)
    price: { type: Number, required: true }, // Preço do item vendido (obrigatório)
    paid: { type: Number, required: true }, // Valor pago pelo item vendido (obrigatório)
    typeBuy: String // Tipo de compra (opcional)
})

// Criando um modelo a partir do esquema definido, chamando-o de "vendaModel"
module.exports = mongoose.model("vendaModel", vendaSchema)
