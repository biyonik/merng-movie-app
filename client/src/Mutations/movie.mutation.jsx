import {gql} from "@apollo/client";

const ADD_MOVIE_MUTATION = gql `
    mutation addMovie($title:String!, $description:String!, $year:Int!, $directorId:ID!) {
        addMovie(title:$title, description:$description, year:$year, directorId:$directorId) {
            id,
            title,
            description,
            year,
            director {
                id,
                name,
                birth
            }
        }
    }
`;

export {ADD_MOVIE_MUTATION};