import {memo} from "react";
import {useQuery} from "@apollo/client";
import {GET_MOVIE_QUERY} from "../../../Queries/movie.query";

const MovieComponent = ({movie, onClick, isListItem, movieId}) => {
    const {id, title, description, year, director} = movie;



    const handleClick = () => {
        onClick();
    }
    return (
        <>
            {isListItem && (
                <li className="content clickable" id={`id_${id}`} onClick={() => onClick()}>
                    <div className="bg"></div>
                    <div className="avatar"></div>
                    <div className="title">{title}</div>
                </li>
            )}
        </>
    )
};

export default memo(MovieComponent);