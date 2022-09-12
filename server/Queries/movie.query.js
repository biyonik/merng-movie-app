const {MovieType} = require('../Types/movie.type');
const {GraphQLID, GraphQLList} = require('graphql');

const GetMovieQuery = () => ({
    type: MovieType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: async (parent, args) => {
    }
});

const GetAllMoviesQuery = () => ({
    type: new GraphQLList(MovieType),
    resolve: async (parent, args) => {

    }
});

module.exports = {GetMovieQuery, GetAllMoviesQuery}
