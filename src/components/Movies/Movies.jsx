import SearchForm from "../SearchForm/SearchForm";
import AddFilmsButton from "../AddFilmsButton/AddFilmsButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css';


function Movies() {

    return (
        <main className="movies">
            <><><SearchForm></SearchForm>
                <MoviesCardList></MoviesCardList></>
                <AddFilmsButton></AddFilmsButton></>
        </main>
    )
}

export default Movies;