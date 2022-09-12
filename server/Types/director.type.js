const {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList} =  require("graphql");
const {MovieType} = require("./movie.type");

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        birth: {
            type: GraphQLInt
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve: async (parent, args) => {

            }
        }
    })
});

module.exports = {
    DirectorType
};
