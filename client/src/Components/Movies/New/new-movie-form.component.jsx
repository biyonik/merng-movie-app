import {memo, useState} from "react";
import {useQuery, useMutation} from "@apollo/client";
import {GET_ALL_DIRECTORS_QUERY} from "../../../Queries/director.query";
import {ADD_MOVIE_MUTATION} from "../../../Mutations/movie.mutation";
import {GET_ALL_MOVIES_QUERY} from "../../../Queries/movie.query";

const NewMovieFormComponent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [directorId, setDirectorId] = useState('');
    const [addMovie] = useMutation(ADD_MOVIE_MUTATION, {
        variables: {
            title: title,
            description: description,
            year: Number(year),
            directorId: directorId
        },
        refetchQueries: [{
            query: GET_ALL_MOVIES_QUERY
        }]
    });
    const {loading, error, data} = useQuery(GET_ALL_DIRECTORS_QUERY);

    if (loading) {
        return <p>Yükleniyor...</p>
    }

    if (error) {
        return <p>Yönetmenler yüklenirken bir hata oluştu</p>
    }

    const {directors} = data;


    const clearAllFormFields = () => {
        setTitle('');
        setDescription('');
        setYear('');
        setDirectorId('')
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await addMovie();
        clearAllFormFields();
    }

    return (
        <div className="container" data-state="New Movie">
            <div className="device" data-view="list">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Başlık</label>
                        <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type="text"
                            name="title"
                            id="title"/>
                    </div>

                    <div>
                        <label htmlFor="title">Açıklama</label>
                        <textarea
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            name="description"
                            id="description"
                            cols="30"
                            rows="10">{description}</textarea>
                    </div>

                    <div>
                        <label htmlFor="title">Yıl</label>
                        <input
                            onChange={e => setYear(e.target.value)}
                            value={year}
                            type="text"
                            name="year"
                            id="year"/>
                    </div>

                    <div>
                        <label htmlFor="directorId">Yönetmen</label>
                        <select
                            onChange={e => setDirectorId(e.target.value)}
                            value={directorId}
                            name="directorId"
                            id="directorId">
                            <option value='' disabled={true}>--Bir Yönetmen Seçiniz---</option>
                            {
                                !error && !loading && directors.length > 0 && directors.map((director) => (
                                    <option value={director.id} key={director.id}>{director.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>
                        <button type="submit">Kaydet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default memo(NewMovieFormComponent);