import {useQuery} from "@apollo/client";
import {GET_ALL_MOVIES_QUERY, GET_MOVIE_QUERY} from "../../../Queries/movie.query";
import {memo, useEffect, useState} from "react";
import MovieComponent from "../Single/movie.component";
import {Button, Modal} from 'antd';
import 'antd/dist/antd.css';
import MovieModalContentComponent from "../Single/movie-modal-content.component";


const MovieListComponent = () => {
    const {loading, error, data} = useQuery(GET_ALL_MOVIES_QUERY);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeMovieId, setActiveMovieId] = useState(false);

    const showModal = (id) => {
        setIsModalOpen(true);
        setActiveMovieId(id);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    if (loading) {
        return <p>Yükleniyor...</p>
    }

    if (error) {
        return <p>Bir hata oluştu!</p>
    }

    const {movies} = data;

    return (
        <>
            <div className="container" data-state="Movie App">
                <div className="device" data-view="list">
                    <ul className="layer" data-layer="list">
                        {!error && !loading && movies.length > 0 && movies.map((movie) => (
                            <MovieComponent isListItem={true} movie={movie} key={movie.id} onClick={() => showModal(movie.id)} />
                        ))}
                    </ul>
                </div>
            </div>

            <Modal
                title="Movie Detail"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        OK
                    </Button>,
                ]}
            >
                <MovieModalContentComponent movieId={activeMovieId} />
            </Modal>
        </>
    )
}

export default memo(MovieListComponent);