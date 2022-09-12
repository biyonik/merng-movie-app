const {DirectorType} = require('../Types/director.type');
const {GraphQLID, GraphQLList} = require("graphql");

const GetDirectorQuery = () => ({
    type: DirectorType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: async (parent, args) => {
    }
});

const GetAllDirectorsQuery = () => ({
    type: new GraphQLList(DirectorType),
    resolve: async (parent, args) => {

    }
});

module.exports = {
    GetDirectorQuery,
    GetAllDirectorsQuery
}
