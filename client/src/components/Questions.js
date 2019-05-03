import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Whatshot, Favorite } from '@material-ui/icons';
import { IconButton, Typography, Grid } from '@material-ui/core';

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

            return (
                <Grid container>
                    {
                        data.getTopQuestions.map(q => (
                            <Grid item xs="12" sm="6" md="4">
                                <Card style={{maxWidth: 500, margin: '5px'}}>
                                    <CardHeader title={q.title} avatar={<Whatshot color="secondary" />}
                                        subheader={q.author.firstname+" "+q.author.lastname}
                                    />
                                    <CardActions>
                                        <IconButton>
                                            <Favorite />
                                        </IconButton>
                                        <Typography variant="p" >{q.totalLikes}</Typography>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            )
        }}
    </Query>
)

export default Questions;