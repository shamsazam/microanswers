const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const express = require('express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const authService = require('./services/auth');
const PORT = process.env.PORT || 8888;

require('./utils/db');

const app = express();

app.get('/todo', (req, res) => {
    res.json({ title: "From Server" });
});

const server = new ApolloServer({ 
    typeDefs,
    resolvers, 
    context: ({ req }) => authService.getUserFromAuthHeader(req.headers.authorization)
});
server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


app.listen(PORT, () => console.log(`listening on ${PORT}`) );