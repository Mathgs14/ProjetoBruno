// Importando a classe model
const clienteModel = require('../models/clienteModel')

module.exports = {
    // Método para obter todos os clientes
    getClientes: (req, res) => {
        // Busca todos os clientes no banco de dados
        clienteModel.find({}).select(["-__v", "-_id"]).then((result) => {
            // Retorna os clientes encontrados como resposta
            res.status(200).json(result)
        }).catch(() => {
            // Se houver um erro, retorna uma mensagem de erro
            res.status(500).json({ message: "Não foi possível recuperar os Clientes" })
        })
    },

    // Método para deletar um cliente por ID
    deleteClientesById: async (req, res) => {
        try {
            // Deleta o cliente com o ID fornecido
            await clienteModel.deleteOne({ id: req.params.id })
            // Retorna uma mensagem de sucesso
            res.status(200).send({ message: "Cliente removido com sucesso!" })
        } catch (err) {
            // Se houver um erro, retorna uma mensagem de erro
            res.status(500).json({ message: "Não foi possível remover o cliente" })
        }
    },

    // Método para obter um cliente por ID
    getCliente: async (req, res) => {
        try {
            // Encontra um cliente pelo ID fornecido
            await clienteModel.findById({ id: req.body.id })
            // Retorna o cliente encontrado como resposta
            res.status(200).send(result)
        } catch (err) {
            // Se houver um erro, retorna uma mensagem de erro
            res.status(500).json({ message: "Não foi possível recuperar o cliente no momento" })
        }
    },

    // Método para atualizar um cliente
    updateCliente: async (req, res) => {
        try {
            // Atualiza o cliente com o ID fornecido com os novos dados
            await clienteModel.updateOne({ id: req.body.id }, req.body)
            // Retorna uma mensagem de sucesso
            res.status(200).send({ message: "Cliente atualizado com sucesso!" })
        } catch (err) {
            // Se houver um erro, retorna uma mensagem de erro
            res.status(500).json({ message: "Não foi possível atualizar os dados" })
        }
    },

    // Método para criar um novo cliente
    createCliente: async (req, res) => {
        try {
            // Cria um novo cliente com os dados fornecidos
            const result = await clienteModel.create(req.body)
            // Retorna o novo cliente criado como resposta
            res.status(201).json(result._doc)
        } catch (err) {
            // Se houver um erro, retorna uma mensagem de erro
            res.status(500).json({ message: `Não foi possível criar o Cliente ${req.body.name}` })
        }
    }
}
