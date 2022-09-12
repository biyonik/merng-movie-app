const { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } = require("graphql");
const {DirectorType} = require("./director.type");

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        year: {
            type: GraphQLInt
        },
        director: {
            type: DirectorType,
            resolve: async (parent, args) => {

            }
        }
    })
});

module.exports = {
    MovieType
}
