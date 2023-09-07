const mongoose = require('mongoose')

const Schema = mongoose.Schema

const funcionarioSchema = new Schema({
    name: {type:String, required: true},
    age:{type:Number,min:18,max:150},
    id: {type: Number, required: true,unique:true},
    email: {type: String, required: true,unique:true},
    password: {type: String, required: true,unique:true},
    cargo: {type: String, required: true},
    
})
//criando um modelo a partir do esquema
module.exports = mongoose.model("FuncionarioModel",funcionarioSchema) 