import {useQuery} from "@apollo/client";
import {GET_MOVIE_QUERY} from "../../../Queries/movie.query";

const MovieModalContentComponent = ({movieId}) => {
    const {loading, error, data} = useQuery(GET_MOVIE_QUERY, {
        variables: {
            id: movieId ?? null
        }
    })

    if(loading) {
        return <p>Yükleniyor...</p>
    }

    if(error) {
        return <p>Bir hata oluştu</p>
    }

    const {movie} = data;

    return (
        <>

            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>{movie.year}</p>
            <br/>
            <h4><strong>{movie.director.name}</strong></h4>
            <hr/>
            <ul className="director-list">
                {movie.director.movies && movie.director.movies.length > 0 && movie.director.movies.map((directorMovie) => (

                    <li key={directorMovie.id}>
                        <div className="bg"></div>
                        <em className="title">
                            {directorMovie.title}
                        </em>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MovieModalContentComponent;