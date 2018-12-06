const authService = require('../services/auth');
const Question = require('../models/question');
const User = require('../models/user');
const Answer = require('../models/answer');

const resolvers = {

    Query: {
        hello: () => 'Hello there',
        getUsers: () => User.find(),
        getQuestions: () => Question.find(),
        getMyQuestions: (_, __, { user }) => Question.find({ author: user.id })
    },

    Mutation: {
        register: (_, user) => authService.register(user),
        login: (_, { email, password }) => authService.login(email, password),
        addQuestion: (_, args) => Question.create(args),
        addAnswer: (_, args) => Answer.create(args),
    },

    User: {
        questions: user => Question.find({ author: user.id })
    },

    Question: {
        author: ques => User.findById(ques.author),
        answers: ques => Answer.find({ question: ques.id })
    },
    
    Answer: {
        question: ans => Question.findById(ans.question),
        author: ans => User.findById(ans.author)
    }
}

module.exports = resolvers;