const authService = require('../services/auth');
const Question = require('../models/question');
const User = require('../models/user');
const Answer = require('../models/answer');

const resolvers = {
    Query: {
        hello: () => 'Hello there',
        getUsers: () => User.find({}),
        getQuestions: () => Question.find({})
    },

    Mutation: {
        register: (_, user, ctx) => authService.register(user),
        login: (_, {email, password }, ctx) => authService.login(email, password),
        addQuestion: (_, {title, author }, ctx) => Question.create({ title, author }),
        addAnswer: (_, {body, question, author }, ctx) => Answer.create({body, question, author})
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