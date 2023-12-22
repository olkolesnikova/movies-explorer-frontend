import SearchForm from "../SearchForm/SearchForm";
import AddFilmsButton from "../AddFilmsButton/AddFilmsButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader"
import './Movies.css';
import { useFormWithValidation } from '../hooks/useForm';
import { moviesApi } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";


function Movies({ searchValue, setSearchValue }) {

    const [movies, setMovies] = useState([]);
    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const [filteredMovies, setFilteredMovies] = useState([]);



    useEffect(() => {
        moviesApi.getMovies()
            .then((data) => {
                setMovies(data);
                console.log(data);
            })
            .catch(console.error)
    }, [])

    /* const filteredMovies = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
    }) */

    function filterMovies(movies) {

        let filteredMovies = movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
        });
        return filteredMovies;
    }

    function handleMoviesSearch(movies) {
        const foundMovies = filterMovies(movies);
        setMovies(foundMovies);
    }


    function handleSearchClick() {

        moviesApi.getMovies()
            .then((movies) => {

                setMovies(movies);
                handleMoviesSearch(movies)
            })
            .catch(console.error)
            
    }

    return (
        <main className="movies">
            <><><SearchForm movies={movies} searchValue={searchValue} setSearchValue={setSearchValue}
                onSearch={handleSearchClick}
            ></SearchForm>
                <MoviesCardList searchValue={searchValue} movies={movies}></MoviesCardList></>
                <AddFilmsButton></AddFilmsButton></>

        </main>
    )
}

export default Movies;