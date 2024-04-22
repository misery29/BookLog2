const UserRepository = require("../repositories/UserRepository");

const UserController = {
    create: async(req, res) => {
        try {
            const User ={
                name: req.body.name,
                email: req.body.email,
                password: req.body.password  
            };

            const response = await UserRepository.create(User)
            res.status(201).json({response, msg: "Usuário criado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const response = await UserRepository.getAll()
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id    
            const response = await UserRepository.getById(id)

            if(!response) {
                return res.status(404).json({msg: "Usuário não encontrado!"})
            }
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id    
            const response = await UserRepository.delete(id)

            if(!response) {
                return res.status(404).json({msg: "Usuário não encontrado!"})
            }

            const deletedUser = await UserRepository.delete(id)

            res.status(200).json({id, msg:"Usuário excluído com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id
            const User ={
                name: req.body.name,
                email: req.body.email,
                password: req.body.password  
            };
            console.log(req.body)
            const response = await UserRepository.update(id, User)

        if(!response) {
            return res.status(404).json({msg: "Usuário não encontrado!"})
            }
            res.status(200).json({response, msg: "Usuário atualizado com sucesso!"})
            
        } catch (error) {
            console.log(error)
        }
    },
    login: async (req, res) => {
        try {
            const User = {
                email: req.body.email,
                password: req.body.password
            };
            const response = await UserRepository.login(User)
            if(!response) {
            return res.status(404).json({msg: "Usuário ou senha incorretos!"})
            }
            res.status(200).json({response, msg: "Login realizado com sucesso!"})
            
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = UserController