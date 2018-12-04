const authService = require('../services/auth');
const Question = require('../models/question');
const User = require('../models/user');

const resolvers = {
    Query: {
        hello: () => 'Hello there',
        getUsers: () => User.find({}),
    },

    Mutation: {
        register: async (_, user, ctx) => await authService.register(user),
        login: async (_, {email, password }, ctx) => await authService.login(email, password),
        addQuestion: async (_, {title, authorId }, ctx) => await Question.create({ title, author: authorId })
    },

    User: {
        questions: async (user, args, ctx) => await Question.find({ author: user.id })
    },

    Question: {
        author: async (ques, args, ctx) => await User.findById(ques.author)
    }
}


module.exports = resolvers;