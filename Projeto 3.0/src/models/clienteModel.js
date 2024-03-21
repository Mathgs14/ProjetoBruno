// Importando a biblioteca mongoose
const mongoose = require('mongoose')

// Importando o Schema do mongoose
const Schema = mongoose.Schema

// Definindo o esquema do cliente
const clienteSchema = new Schema({
    name: { type: String, required: true }, // Nome do cliente (obrigatório)
    age: { type: Number, min: 18, max: 150 }, // Idade do cliente (entre 18 e 150)
    id: { type: Number, required: true, unique: true }, // ID único do cliente (obrigatório e único)
    email: { type: String, required: true, unique: true }, // Email do cliente (obrigatório e único)
    password: { type: String, required: true }, // Senha do cliente (obrigatório)
})

// Criando um modelo a partir do esquema definido, chamando-o de "clienteModel"
module.exports = mongoose.model("clienteModel", clienteSchema)
