import './../MoviesCardList/MoviesCardList.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './../Movies/Movies.css';


function SavedMovies() {

    return (
        <main>
            <><SearchForm></SearchForm>
                <MoviesCardList></MoviesCardList></>
        </main>
    )
}

export default SavedMovies;