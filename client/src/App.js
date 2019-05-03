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
      <h2 style={{textAlign: 'center'}}>Top Questions</h2>
      <div style={{ display: 'flex', justifyContent: 'center'}}></div>
        <Questions />
    </div>
  </ApolloProvider>
)

export default App;
