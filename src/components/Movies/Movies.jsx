import SearchForm from "../SearchForm/SearchForm";
import AddFilmsButton from "../AddFilmsButton/AddFilmsButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css';


function Movies() {

    return (

        <><><SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList></>
            <AddFilmsButton></AddFilmsButton></>
    )
}

export default Movies;