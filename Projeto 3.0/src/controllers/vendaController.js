//importando a classe model
const vendaModel = require('../models/vendaModel')

module.exports = {
    getVendas: (req, res) => {
       
        vendaModel.find({}).select(["-__v", "-_id"]).then((result) => {
          
            res.status(200).json(result)
        }).catch(() => {

            res.status(500).json({message: "Não foi possível recuperar as vendas"})
        })
    },
    
    deleteVendaById: async (req, res) => {
       
        try {
             await vendaModel.deleteOne({id: req.params.id})
            res.status(200).send({message: "Venda removido com sucesso!"})
        } catch (err) {
            res.status(500).json({message: "Não foi possível remover a venda"})
        }
    },
    getVenda: async (req,res) =>{
        try {
            await vendaModel.findById({id: req.body.id})
            res.status(200).send(result)
        } catch (err) {
           
            res.status(500).json({message: "Não foi possível recuperar  a Venda no momento"})
        }

    },
    updateVenda: async (req,res) =>{
        try {
          await vendaModel.updateOne({id: req.body.id}, req.body)
            res.status(200).send({message: "Venda atualizada com sucesso!"})
        } catch (err) {
            res.status(500).json({message: "Não foi possível atualizar os dados"})
        }

    },
    createVenda: async(req,res) =>{
       try {
        const result = await vendaModel.create(req.body)
        res.status(201).json(result._doc)
        
       } catch (err) {
        res.status(500).json({message:`Não foi possivel criar a Venda ${req.body.name}`})
       }
    }
}