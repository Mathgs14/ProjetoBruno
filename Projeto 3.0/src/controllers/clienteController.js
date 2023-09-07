//importando a classe model
const clienteModel = require('../models/clienteModel')

module.exports = {
    getClientes: (req, res) => {
       
        clienteModel.find({}).select(["-__v", "-_id"]).then((result) => {
          
            res.status(200).json(result)
        }).catch(() => {

            res.status(500).json({message: "Não foi possível recuperar os Clientes"})
        })

    },
    deleteClientesById: async (req,res) =>{
        try {
            await clienteModel.deleteOne({id: req.params.id})
           res.status(200).send({message: "cliente removido com sucesso!"})
       } catch (err) {
           res.status(500).json({message: "Não foi possível remover a cliente"})
       }
        
    },
    getCliente: async (req,res) =>{
        try {
            await clienteModel.findById({id: req.body.id})
            res.status(200).send(result)
        } catch (err) {
           
            res.status(500).json({message: "Não foi possível recuperar o cliente no momento"})
        }

    },
    updateCliente: async (req,res) =>{
        try {
            await clienteModel.updateOne({id: req.body.id}, req.body)
              res.status(200).send({message: "Cliente atualizada com sucesso!"})
          } catch (err) {
              res.status(500).json({message: "Não foi possível atualizar os dados"})
          }        
    },
    createCliente: async(req,res) =>{
       try {
        const result = await clienteModel.create(req.body)
        res.status(201).json(result._doc)
        
       } catch (err) {
        res.status(500).json({message:`Não foi possivel criar o Cliente ${req.body.name}`})
       }
    }
}