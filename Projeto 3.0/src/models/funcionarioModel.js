// Importando a biblioteca mongoose
const mongoose = require('mongoose')

// Importando o Schema do mongoose
const Schema = mongoose.Schema

// Definindo o esquema do funcionário
const funcionarioSchema = new Schema({
    name: { type: String, required: true }, // Nome do funcionário (obrigatório)
    age: { type: Number, min: 18, max: 150 }, // Idade do funcionário (entre 18 e 150)
    id: { type: Number, required: true, unique: true }, // ID único do funcionário (obrigatório e único)
    email: { type: String, required: true, unique: true }, // Email do funcionário (obrigatório e único)
    password: { type: String, required: true, unique: true }, // Senha do funcionário (obrigatório e único)
    cargo: { type: String, required: true }, // Cargo do funcionário (obrigatório)
})

// Criando um modelo a partir do esquema definido, chamando-o de "FuncionarioModel"
module.exports = mongoose.model("FuncionarioModel", funcionarioSchema)
