import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Questions = () => (
    <Query
        query={gql`
        {
            hello
        }
    `}
    >
        {({ loading, error, data }) => {
            if(loading) return <p>Loading....</p>;
            if(error) return <p>Error...</p>;

            return <p>{data.hello}</p>;
        }}
    </Query>
)

export default Questions;