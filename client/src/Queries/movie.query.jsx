import {gql} from "@apollo/client";

const GET_MOVIE_QUERY = gql `
    query movie($id:ID!) {
        movie(id:$id) {
            id, title, description, year, director {
                id, name, birth, movies {
                    id, title
                }
            }
        }
    }
`;

const GET_ALL_MOVIES_QUERY = gql `
    query movies {
        movies {
            id, title, description, year, director {
                id, name, birth
            }
        }
    }
`;

export {GET_MOVIE_QUERY, GET_ALL_MOVIES_QUERY};