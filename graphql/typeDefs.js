const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        hello: String!,
        getUsers: [User!]!,
        getQuestions: [Question!]!
    } 

    type Mutation {
        register(email: String!, firstname: String!, lastname: String!, password: String!): User!,
        login(email: String!, password: String!): User!,
        addQuestion(title: String!, author: String!): Question!,
        addAnswer(body: String!, question: String!, author: String!): Answer!
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
        answers: [Answer]
    }

    type Answer {
        id: ID,
        body: String!,
        question: Question!,
        author: User!
    }


`

module.exports = typeDefs