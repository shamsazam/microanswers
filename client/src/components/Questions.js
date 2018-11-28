import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    {
        hello
    }`;

const Questions = () => (
    <Query query={query}>
        {({ loading, error, data }) => {
            if(loading) return <p>Loading....</p>;
            if(error) return <p>Error...</p>;

            return <p>{data.hello}</p>;
        }}
    </Query>
)

export default Questions;