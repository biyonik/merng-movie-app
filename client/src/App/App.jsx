import MovieListComponent from "../Components/Movies/List/movie-list.component";
import NewMovieFormComponent from "../Components/Movies/New/new-movie-form.component";


function App() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <NewMovieFormComponent/>
            <MovieListComponent/>
        </div>
    );
}

export default App;
