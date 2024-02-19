import SearchForm from "../SearchForm/SearchForm";
import AddFilmsButton from "../AddFilmsButton/AddFilmsButton";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader"
import './Movies.css';
import { useFormWithValidation } from '../hooks/useForm';
import { moviesApi } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useResizeScreen } from "../hooks/useResizeScreen";
import { ScreenSizeConfig } from "../../utils/ScreenSizeConfig";



function Movies({ searchValue, setSearchValue, onSave, onDelete, isLoading }) {

    const [movies, setMovies] = useState([]);
    const [moviesForDisplay, setMoviesForDisplay] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const [isFilterChecked, setIsFilterChecked] = useLocalStorage('checkbox', 'false');
    const [isSaved, setIsSaved] = useState(false);
    const [savedMovies, setSavedMovies] = useLocalStorage('savedMovies', []);
    const [moviesRenderParams, setMoviesRenderParams] = useState({});
    const screenWidth = useResizeScreen();
    const [isSearching, setIsSearching] = useState(false);


    //const foundMovies = filterMovies(movies);
    //console.log(foundMovies);

    useEffect(() => {
        moviesApi.getMovies()
            .then((movies) => {

                setMovies(movies);
                console.log(movies);
            })
            .catch(console.error)
    }, [])

    function filterMovies(movies) {

        let filteredMovies = movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
        });

        if (filteredMovies.length > 0) {
            if (!isFilterChecked) {
                filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
                if (filteredMovies.length > 0) {
                    return filteredMovies
                }
                return []
            }
            return filteredMovies
        } else {
            return []
        };
    }


    function handleMoviesSearch(movies) {
        const foundMovies = filterMovies(movies);
        if (foundMovies.length > 0) {

            const found = foundMovies.filter((movie, index) => {

                return index < moviesRenderParams.all;
            });
            console.log(found);
            setMoviesForDisplay(found);
            setErrorMessage('');
            setIsSearching(false)
            console.log(foundMovies);
            console.log(moviesForDisplay);
        }
        else {
            setErrorMessage('Ничего не найдено');
            setMovies([]);
            setIsSearching(true);
        }
    }


    function handleSearchClick() {

        if (searchValue === '') {
            setValidationError('Нужно ввести ключевое слово');
            setErrorMessage('');
            setMoviesForDisplay([]);
            setIsSearching(false);

        } else {
            setValidationError('');

            moviesApi.getMovies()
                .then((movies) => {

                    handleMoviesSearch(movies);
                    setIsSearching(true);
                })
                .catch(console.error)
        }

    }

    useEffect(() => {
        if (screenWidth >= ScreenSizeConfig.wideScreen.width) {
            setMoviesRenderParams(ScreenSizeConfig.wideScreen.movies);
        } else if (
            screenWidth < ScreenSizeConfig.wideScreen.width &&
            screenWidth >= ScreenSizeConfig.desktop.width
        ) {
            setMoviesRenderParams(ScreenSizeConfig.desktop.movies);
        } else if (
            screenWidth < ScreenSizeConfig.desktop.width &&
            screenWidth >= ScreenSizeConfig.tablet.width
        ) {
            setMoviesRenderParams(ScreenSizeConfig.tablet.movies);
        } else {
            setMoviesRenderParams(ScreenSizeConfig.mobile.movies);
        }
    }, [screenWidth]);

    function handleClickOnAddFilmsButton() {

        const start = moviesForDisplay.length;
        const end = start + moviesRenderParams.additional;
        const amount = end - start;
        if (amount > 0) {
            const foundMovies = filterMovies(movies);
            const additionalMovies = foundMovies.slice(start, end);
            console.log(additionalMovies);
            setMoviesForDisplay([...moviesForDisplay, ...additionalMovies]);
        }
    }

    const foundMovies = filterMovies(movies);

    return (
        <main className="movies">
            <><><SearchForm
                movies={movies}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onSearch={handleSearchClick}
                isFilterChecked={isFilterChecked}
                setIsFilterChecked={setIsFilterChecked}
            ></SearchForm>
                <span className="movies__error">
                    {validationError}
                </span>
                <span className="movies__error">
                    {errorMessage}
                </span>
                {isLoading && <Preloader />}
                <MoviesCardList
                    searchValue={searchValue}
                    movies={moviesForDisplay}
                    savedMovies={savedMovies}
                    isSaved={isSaved}
                    setIsSaved={setIsSaved}
                    onSave={onSave}
                    onDelete={onDelete}
                    moviesRenderParams={moviesRenderParams}

                ></MoviesCardList></>
                <AddFilmsButton
                    movies={foundMovies}
                    moviesForDisplay={moviesForDisplay}
                    onClick={handleClickOnAddFilmsButton}></AddFilmsButton></>

        </main>
    )
}

export default Movies;