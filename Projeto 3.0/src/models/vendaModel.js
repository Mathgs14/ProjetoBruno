const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vendaSchema = new Schema({
    name: {type:String, required: true},
    id:{type:Number,required: true, unique:true},
    price: {type: Number, required: true},
    paid: {type: Number, required: true},
    typeBuy:String
    
})

module.exports = mongoose.model("vendaModel",vendaSchema) 