const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        hello: String!,
        getUsers: [User!]!,
    } 

    type Mutation {
        register(email: String!, firstname: String!, lastname: String!, password: String!): User!,
        login(email: String!, password: String!): User!,
        addQuestion(title: String!, authorId: String!): Question!
    }

    type User {
        id: ID,
        email: String!,
        firstname: String!,
        lastname: String!,
        questions: [Question!]
    }

    type Question {
        title: String!,
        author: User
    }
`

module.exports = typeDefs