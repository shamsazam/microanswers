const { ApolloServer, gql } = require('apollo-server-express');
const app = require('express')();
const PORT = process.env.PORT || 8888;

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello there'
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

app.get("/", (req, res) => res.send("welcome to microanswers"));

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`listening on ${PORT}`) );