import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Questions from './components/Questions'
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:8888/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="wrapper">
      <h2>Welcome</h2>
      <Questions />
    </div>
  </ApolloProvider>
)

export default App;
