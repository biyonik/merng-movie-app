import {gql} from "@apollo/client";


const GET_DIRECTOR_QUERY = gql `
    query getDirector($id:ID!) {
        director(id:$id) {
            id, name, birth
        }
    } 
`

const GET_ALL_DIRECTORS_QUERY = gql `
    query getAllDirectors {
        directors {
            id, name, birth
        }
    }
`;

export {GET_DIRECTOR_QUERY, GET_ALL_DIRECTORS_QUERY};