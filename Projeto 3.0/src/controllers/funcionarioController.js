// Importando a classe model de funcionário
const funcionarioModel = require('../models/funcionarioModel')

module.exports = {
    // Função para obter todos os funcionários
    getFuncionarios: (req, res) => {
        // Encontra todos os funcionários no banco de dados
        funcionarioModel.find({})
            // Seleciona apenas os campos desejados para retornar
            .select(["-__v", "-_id"])
            .then((result) => {
                // Retorna os funcionários encontrados com status 200
                res.status(200).json(result)
            })
            .catch(() => {
                // Retorna um erro caso não seja possível recuperar os funcionários
                res.status(500).json({ message: "Não foi possível recuperar os Funcionarios" })
            })
    },

    // Função para deletar funcionário por ID
    deleteFuncionariosById: async (req, res) => {
        try {
            // Remove o funcionário do banco de dados pelo ID
            await funcionarioModel.deleteOne({ id: req.params.id })
            // Retorna uma mensagem de sucesso caso o funcionário seja removido com sucesso
            res.status(200).send({ message: "funcionario removido com sucesso!" })
        } catch (err) {
            // Retorna um erro caso não seja possível remover o funcionário
            res.status(500).json({ message: "Não foi possível remover a funcionario" })
        }
    },

    // Função para obter funcionário por ID
    getFuncionario: async (req, res) => {
        try {
            // Encontra o funcionário no banco de dados pelo ID
            const result = await funcionarioModel.findById({ id: req.body.id })
            // Retorna o funcionário encontrado com status 200
            res.status(200).send(result)
        } catch (err) {
            // Retorna um erro caso não seja possível recuperar o funcionário
            res.status(500).json({ message: "Não foi possível recuperar  o funcionario no momento" })
        }
    },

    // Função para atualizar funcionário
    updateFuncionario: async (req, res) => {
        try {
            // Atualiza os dados do funcionário no banco de dados pelo ID
            await funcionarioModel.updateOne({ id: req.body.id }, req.body)
            // Retorna uma mensagem de sucesso caso os dados do funcionário sejam atualizados com sucesso
            res.status(200).send({ message: "Funcionario atualizada com sucesso!" })
        } catch (err) {
            // Retorna um erro caso não seja possível atualizar os dados do funcionário
            res.status(500).json({ message: "Não foi possível atualizar os dados" })
        }
    },

    // Função para criar um novo funcionário
    createFuncionario: async (req, res) => {
        try {
            // Cria um novo funcionário no banco de dados com os dados fornecidos
            const result = await funcionarioModel.create(req.body)
            // Retorna o novo funcionário criado com status 201
            res.status(201).json(result._doc)
        } catch (err) {
            // Retorna um erro caso não seja possível criar o novo funcionário
            res.status(500).json({ message: `Não foi possivel criar o funcionario ${req.body.name}` })
        }
    }
}
