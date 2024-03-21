// Importando a classe model de venda
const vendaModel = require('../models/vendaModel')

// Exportando os métodos para manipulação das vendas
module.exports = {
    // Função para obter todas as vendas
    getVendas: (req, res) => {
        // Encontra todas as vendas no banco de dados
        vendaModel.find({})
            // Seleciona apenas os campos desejados para retornar
            .select(["-__v", "-_id"])
            .then((result) => {
                // Retorna as vendas encontradas com status 200
                res.status(200).json(result)
            })
            .catch(() => {
                // Retorna um erro caso não seja possível recuperar as vendas
                res.status(500).json({ message: "Não foi possível recuperar as vendas" })
            })
    },
    
    // Função para deletar uma venda por ID
    deleteVendaById: async (req, res) => {
        try {
            // Remove a venda do banco de dados pelo ID
            await vendaModel.deleteOne({ id: req.params.id })
            // Retorna uma mensagem de sucesso caso a venda seja removida com sucesso
            res.status(200).send({ message: "Venda removida com sucesso!" })
        } catch (err) {
            // Retorna um erro caso não seja possível remover a venda
            res.status(500).json({ message: "Não foi possível remover a venda" })
        }
    },
    
    // Função para obter uma venda por ID
    getVenda: async (req, res) => {
        try {
            // Encontra a venda no banco de dados pelo ID
            const result = await vendaModel.findById({ id: req.body.id })
            // Retorna a venda encontrada com status 200
            res.status(200).send(result)
        } catch (err) {
            // Retorna um erro caso não seja possível recuperar a venda
            res.status(500).json({ message: "Não foi possível recuperar a Venda no momento" })
        }
    },

    // Função para atualizar uma venda
    updateVenda: async (req, res) => {
        try {
            // Atualiza os dados da venda no banco de dados pelo ID
            await vendaModel.updateOne({ id: req.body.id }, req.body)
            // Retorna uma mensagem de sucesso caso os dados da venda sejam atualizados com sucesso
            res.status(200).send({ message: "Venda atualizada com sucesso!" })
        } catch (err) {
            // Retorna um erro caso não seja possível atualizar os dados da venda
            res.status(500).json({ message: "Não foi possível atualizar os dados" })
        }
    },

    // Função para criar uma nova venda
    createVenda: async (req, res) => {
        try {
            // Cria uma nova venda no banco de dados com os dados fornecidos
            const result = await vendaModel.create(req.body)
            // Retorna a nova venda criada com status 201
            res.status(201).json(result._doc)
        } catch (err) {
            // Retorna um erro caso não seja possível criar a nova venda
            res.status(500).json({ message: `Não foi possivel criar a Venda ${req.body.name}` })
        }
    }
}
