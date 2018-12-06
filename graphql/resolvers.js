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
        likeQuestion: async (_, args, { user }) => {
            let ques = await Question.findById(args.questionId);
            const index = ques.likedBy.indexOf(user.id);
            if(index > -1)
                ques.likedBy.splice(index, 1);
            else
                ques.likedBy.push(user.id);
            return await ques.save();
        }
    },

    User: {
        questions: user => Question.find({ author: user.id })
    },

    Question: {
        author: ques => User.findById(ques.author),
        answers: ques => Answer.find({ question: ques.id }),
        totalLikes: ques => ques.likedBy.length,
        alreadyLiked: (ques, _, { user }) => user && ques.likedBy.indexOf(user.id) > -1
    },
    
    Answer: {
        question: ans => Question.findById(ans.question),
        author: ans => User.findById(ans.author)
    }
}

module.exports = resolvers;