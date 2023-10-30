import './../MoviesCardList/MoviesCardList.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './../Movies/Movies.css';


function SavedMovies() {

    return (

        <><SearchForm></SearchForm>
        <MoviesCardList></MoviesCardList></>

    )
}

export default SavedMovies;