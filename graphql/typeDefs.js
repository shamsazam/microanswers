const { gql } = require('apollo-server-express')

const typeDefs = gql`

    directive @requireAuth on FIELD_DEFINITION

    type Query {
        hello: String!,
        getUsers: [User!] @requireAuth,
        getTopQuestions: [TopQuestion!],
        getMyQuestions: [Question!] @requireAuth
    } 

    type Mutation {
        register(email: String!, firstname: String!, lastname: String!, password: String!): AuthPayload!,
        login(email: String!, password: String!): AuthPayload!,
        addQuestion(title: String!): Question! @requireAuth,
        addAnswer(body: String!, question: String!): Answer! @requireAuth,
        likeQuestion(questionId: String!): Question @requireAuth
    }

    type AuthPayload {
        user: User!,
        token: String!
    }

    type User {
        id: ID,
        email: String!,
        firstname: String!,
        lastname: String!,
        questions: [Question!]
    }

    type Question {
        id: ID,
        title: String!,
        author: User,
        answers: [Answer],
        totalLikes: Int!,
        alreadyLiked: Boolean
    }

    type Answer {
        id: ID,
        body: String!,
        question: Question!,
        author: User!
    }

    type TopQuestion {
        id: ID,
        title: String!,
        author: TopQuestionAuthor!,
        answers: [TopQuestionAnswer],
        totalLikes: Int!,
        alreadyLiked: Boolean
    }

    type TopQuestionAuthor {
        id: ID,
        firstname: String!,
        lastname: String!
    }

    type TopQuestionAnswer {
        id: ID!,
        body: String!,
        author: TopQuestionAuthor!
    }

`

module.exports = typeDefs