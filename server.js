const { ApolloServer, gql } = require('apollo-server-express');
const path = require('path');
const express = require('express');
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

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`listening on ${PORT}`) );