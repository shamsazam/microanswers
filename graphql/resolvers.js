const authService = require('../services/auth');
const { loggedIn } = require('./authMiddleware');
const Question = require('../models/question');
const User = require('../models/user');
const Answer = require('../models/answer');

const resolvers = {
    
    Query: {
        hello: () => 'Hello there',
        getUsers: (_, args, ctx) => loggedIn(args, ctx, args => User.find({}) ),
        getQuestions: (_, args, ctx) => loggedIn(args, ctx, args => Question.find({}) ),
    },

    Mutation: {
        register: (_, user, ctx) => authService.register(user),
        login: (_, { email, password }, ctx) => authService.login(email, password),
        addQuestion: (_, args, ctx) => loggedIn(args, ctx, args => Question.create(args)),
        addAnswer: (_, args, ctx) => loggedIn(args, ctx, args => Answer.create(args)),
    },

    User: {
        questions: (user, _, __) => Question.find({ author: user.id })
    },

    Question: {
        author: (ques, _, __) => User.findById(ques.author),
        answers: (ques, _, __) => Answer.find({ question: ques.id })
    },
    
    Answer: {
        question: (ans, _, __) => Question.findById(ans.question),
        author: (ans, _, __) => User.findById(ans.author)
    }
}


module.exports = resolvers;