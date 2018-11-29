import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    {
        questions {
            text
        }
        hello
    }`;

const Questions = () => (
    <Query query={query}>
        {({ loading, error, data }) => {
            if(loading) return <p>Loading....</p>;
            if(error) return <p>Error...</p>;

            return data.questions.map(q => (
                <div className="card">
                    <div className="card-content">
                        <p className="title">{q.text}</p>
                    </div>
                </div>
            ));
        }}
    </Query>
)

export default Questions;