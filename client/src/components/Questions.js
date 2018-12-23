import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    {
        getTopQuestions {
            id
            title
            totalLikes
            alreadyLiked
            author {
              id
              firstname
              lastname
            }
            answers {
              id
              body
              author {
                id
                firstname
                lastname
              }
            }
          }
    }`;

const Questions = () => (
    <Query query={query}>
        {({ loading, error, data }) => {
            if(loading) return <p>Loading....</p>;
            if(error) return <p>{error.message}</p>;

            return data.getTopQuestions.map(q => (
                <div>
                    <h1>{q.title}</h1>
                    <p style={{textAlign: "center"}}>
                        <span>{q.author.firstname + " " + q.author.lastname}</span> &nbsp; &nbsp;
                        <span>Likes: {q.totalLikes}</span>
                    </p>
                </div>
            ));
        }}
    </Query>
)

export default Questions;