//importando a classe model
const funcionarioModel = require('../models/funcionarioModel')

module.exports = {
    getFuncionarios: (req, res) => {
       
        funcionarioModel.find({}).select(["-__v", "-_id"]).then((result) => {
          
            res.status(200).json(result)
        }).catch(() => {

            res.status(500).json({message: "Não foi possível recuperar os Funcionarios"})
        })

    },
    deleteFuncionariosById: async (req,res) =>{
        try {
            await funcionarioModel.deleteOne({id: req.params.id})
           res.status(200).send({message: "funcionario removido com sucesso!"})
       } catch (err) {
           res.status(500).json({message: "Não foi possível remover a funcionario"})
       }
        
    },
    getFuncionario: async (req,res) =>{
        try {
            await funcionarioModel.findById({id: req.body.id})
            res.status(200).send(result)
        } catch (err) {
           
            res.status(500).json({message: "Não foi possível recuperar  o funcionario no momento"})
        }

    },
    updateFuncionario: async (req,res) =>{
        try {
            await funcionarioModel.updateOne({id: req.body.id}, req.body)
              res.status(200).send({message: "Funcionario atualizada com sucesso!"})
          } catch (err) {
              res.status(500).json({message: "Não foi possível atualizar os dados"})
          }

    },
    createFuncionario: async(req,res) =>{
       try {
        const result = await funcionarioModel.create(req.body)
        res.status(201).json(result._doc)
        
       } catch (err) {
        res.status(500).json({message:`Não foi possivel criar o funcionario ${req.body.name}`})
       }
    }
}