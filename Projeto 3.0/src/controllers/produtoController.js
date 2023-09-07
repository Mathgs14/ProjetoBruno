//importando a classe model
const produtoModel = require('../models/produtoModel')

module.exports = {
    getProdutos: (req, res) => {
       
        produtoModel.find({}).select(["-__v", "-_id"]).then((result) => {
          
            res.status(200).json(result)
        }).catch(() => {

            res.status(500).json({message: "Não foi possível recuperar os produtos"})
        })

    },
    deleteProdutosById: async (req,res) =>{
        try {
            await produtoModel.deleteOne({id: req.params.id})
           res.status(200).send({message: "produto removido com sucesso!"})
       } catch (err) {
           res.status(500).json({message: "Não foi possível remover a produto"})
       }
        
    },
    getProduto: async (req,res) =>{
        try {
            await produtoModel.findById({id: req.body.id})
            res.status(200).send(result)
        } catch (err) {
           
            res.status(500).json({message: "Não foi possível recuperar  o produto no momento"})
        }

    },
    updateProduto: async (req,res) =>{
        try {
            await produtoModel.updateOne({id: req.body.id}, req.body)
              res.status(200).send({message: "Produto atualizado com sucesso!"})
          } catch (err) {
              res.status(500).json({message: "Não foi possível atualizar os dados"})
          }

    },
    createProduto: async(req,res) =>{
       try {
        const result = await produtoModel.create(req.body)
        res.status(201).json(result._doc)
        
       } catch (err) {
        res.status(500).json({message:`Não foi possivel criar o produto ${req.body.name}`})
       }
    }
}