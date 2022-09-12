const graphql = require('graphql');
const {GetMovieQuery, GetAllMoviesQuery} = require('../Queries/movie.query');
const {GetDirectorQuery, GetAllDirectorsQuery} = require("../Queries/director.query");
const {GraphQLSchema, GraphQLObjectType} = graphql;


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        movie: GetMovieQuery(),
        movies: GetAllMoviesQuery(),
        director: GetDirectorQuery(),
        directors: GetAllDirectorsQuery()
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
