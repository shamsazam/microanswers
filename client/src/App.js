import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Questions from './components/Questions';
import Navbar from './components/Navbar';
import './App.css';

const client = new ApolloClient({
  uri: "/graphql"
});

const App = () => (
  <ApolloProvider client={client}> 
    <div>
      <Navbar />
      <h2 style={{marginTop: '80px'}}>Welcome</h2>
      <Questions />
    </div>
  </ApolloProvider>
)

export default App;
