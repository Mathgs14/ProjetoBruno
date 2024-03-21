// Importando a classe model
const produtoModel = require('../models/produtoModel')

// Exportando os métodos para manipulação dos produtos
module.exports = {
    // Função para obter todos os produtos
    getProdutos: (req, res) => {
        // Encontra todos os produtos no banco de dados
        produtoModel.find({})
            // Seleciona apenas os campos desejados para retornar
            .select(["-__v", "-_id"])
            .then((result) => {
                // Retorna os produtos encontrados com status 200
                res.status(200).json(result)
            })
            .catch(() => {
                // Retorna um erro caso não seja possível recuperar os produtos
                res.status(500).json({ message: "Não foi possível recuperar os produtos" })
            })
    },

    // Função para deletar um produto por ID
    deleteProdutosById: async (req, res) => {
        try {
            // Remove o produto do banco de dados pelo ID
            await produtoModel.deleteOne({ id: req.params.id })
            // Retorna uma mensagem de sucesso caso o produto seja removido com sucesso
            res.status(200).send({ message: "produto removido com sucesso!" })
        } catch (err) {
            // Retorna um erro caso não seja possível remover o produto
            res.status(500).json({ message: "Não foi possível remover a produto" })
        }
    },

    // Função para obter um produto por ID
    getProduto: async (req, res) => {
        try {
            // Encontra o produto no banco de dados pelo ID
            const result = await produtoModel.findById({ id: req.body.id })
            // Retorna o produto encontrado com status 200
            res.status(200).send(result)
        } catch (err) {
            // Retorna um erro caso não seja possível recuperar o produto
            res.status(500).json({ message: "Não foi possível recuperar o produto no momento" })
        }
    },

    // Função para atualizar um produto
    updateProduto: async (req, res) => {
        try {
            // Atualiza os dados do produto no banco de dados pelo ID
            await produtoModel.updateOne({ id: req.body.id }, req.body)
            // Retorna uma mensagem de sucesso caso os dados do produto sejam atualizados com sucesso
            res.status(200).send({ message: "Produto atualizado com sucesso!" })
        } catch (err) {
            // Retorna um erro caso não seja possível atualizar os dados do produto
            res.status(500).json({ message: "Não foi possível atualizar os dados" })
        }
    },

    // Função para criar um novo produto
    createProduto: async (req, res) => {
        try {
            // Cria um novo produto no banco de dados com os dados fornecidos
            const result = await produtoModel.create(req.body)
            // Retorna o novo produto criado com status 201
            res.status(201).json(result._doc)
        } catch (err) {
            // Retorna um erro caso não seja possível criar o novo produto
            res.status(500).json({ message: `Não foi possível criar o produto ${req.body.name}` })
        }
    }
}
