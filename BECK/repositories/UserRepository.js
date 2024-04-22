const { User: UserModel } = require("../models/Users");

const UserRepository = {
    create: async(user) => {
        return await UserModel.create(user);
    },

    getAll: async () => {
        return await UserModel.find();
    },

    getById: async (id) => {
        return await UserModel.findById(id);
    },

    delete: async (id) => {
        return await UserModel.findByIdAndDelete(id);
    },

    update: async (id, user) => {
        return await UserModel.findByIdAndUpdate(id, user);
    },
    login: async (User) => {
        return await UserModel.findOne(User);
    }
}

module.exports = UserRepository;
