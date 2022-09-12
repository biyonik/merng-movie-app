const graphql = require('graphql');
const {GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull} = require("graphql");
const DirectorModel = require("../Models/DirectorModel");
const MovieModel = require("../Models/MovieModel");
const {GraphQLSchema, GraphQLObjectType} = graphql;

/**
 * TYPES
 */
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
                return DirectorModel.findById(parent.directorId);
            }
        }
    })
});

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
                return MovieModel.find({directorId: parent._id})
            }
        }
    })
});

/**
 * QUERIES
 */
const GetDirectorQuery = () => ({
    type: DirectorType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: async (parent, args) => {
        return DirectorModel.findById(args.id);
    }
});

const GetAllDirectorsQuery = () => ({
    type: new GraphQLList(DirectorType),
    resolve: async (parent, args) => {
        return DirectorModel.find();
    }
});

const GetMovieQuery = () => ({
    type: MovieType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: async (parent, args) => {
        return MovieModel.findById(args.id);
    }
});

const GetAllMoviesQuery = () => ({
    type: new GraphQLList(MovieType),
    resolve: async (parent, args) => {
        return MovieModel.find();
    }
});

/**
 * MUTATIONS
 */
const AddMovieMutation = () => ({
    type: MovieType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: GraphQLString
        },
        year: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        directorId: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: async (parent, args) => {
        const newMovie = new MovieModel({
            title: args.title,
            description: args.description,
            year: args.year,
            directorId: args.directorId
        });
        return await newMovie.save();
    }
})

const AddDirectorMutation = () => ({
    type: DirectorType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        birth: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: async (parent, args) => {
        const newDirector = new DirectorModel({
            name: args.name,
            birth: args.birth
        });
        return await newDirector.save();
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        movie: GetMovieQuery(),
        movies: GetAllMoviesQuery(),
        director: GetDirectorQuery(),
        directors: GetAllDirectorsQuery()
    }
});

const RootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        addMovie: AddMovieMutation(),
        addDirector: AddDirectorMutation()
    }
})

module.exports = {
    schema: new GraphQLSchema({
        query: RootQuery,
        mutation: RootMutation
    }),
    MovieType,
    DirectorType
}
