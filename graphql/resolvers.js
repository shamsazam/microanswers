const models = require('../models');
const authService = require('../services/auth');

const resolvers = {
    Query: {
        hello: () => 'Hello there',
        getUsers: () => models.User.find({}),
    },

    Mutation: {
        register: async (_, user, ctx) => await authService.register(user),
        login: async (_, {email, password }, ctx) => await authService.login(email, password)
    }
}


module.exports = resolvers;