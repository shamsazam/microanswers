import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Questions from './components/Questions';
import Navbar from './components/Navbar';
import './bulma.min.css';
import './App.css';

const client = new ApolloClient({
  uri: "/graphql",
  headers: {
    authorization: "sdflflfljlsdsdljlsdjldfjd"
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="wrapper">
      <Navbar />
      <h2>Welcome</h2>
      <Questions />
    </div>
  </ApolloProvider>
)

export default App;
