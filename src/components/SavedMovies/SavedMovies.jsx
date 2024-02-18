import './../MoviesCardList/MoviesCardList.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './../Movies/Movies.css';
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState, useEffect } from 'react';

function SavedMovies({ savedMovies, setSavedMovies, onSave, onDelete, searchValue, setSearchValue }) {

    const [moviesForDisplay, setMoviesForDisplay] = useState([]);
    
    const [isFilterChecked, setIsFilterChecked] = useLocalStorage('checkbox', 'false');
    const [validationError, setValidationError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    
    useEffect(() => {
       
        const fromLocal = JSON.parse(localStorage.getItem('savedMovies'));
        console.log(fromLocal);
        setMoviesForDisplay(fromLocal);

    }, [])

    function filterMovies(movies) {

        let filteredMovies = savedMovies.filter((movie) => {
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
console.log(foundMovies);
        if (foundMovies.length > 0) {
            
            setMoviesForDisplay(foundMovies);
            setErrorMessage('');
            
        }
        else {
            
            setErrorMessage('Ничего не найдено');
            setMoviesForDisplay([]);
        }
    }


    function handleSearchClick() {

        if (searchValue === '') {
            setValidationError('Нужно ввести ключевое слово');
            setErrorMessage('');
            setMoviesForDisplay([]);

        } else {
            setValidationError('');
            
            const saved = JSON.parse(localStorage.getItem('savedMovies'));
            console.log(saved);
            handleMoviesSearch(saved);
        }

    }

    return (
        <main className='movies'>
            <><SearchForm movies={savedMovies} searchValue={searchValue} setSearchValue={setSearchValue}
                onSearch={handleSearchClick} isFilterChecked={isFilterChecked} setIsFilterChecked={setIsFilterChecked}
                ></SearchForm>
                <span className="movies__error">
                    {validationError}
                </span>
                <span className="movies__error">
                    {errorMessage}
                </span>
                <MoviesCardList savedMovies={savedMovies} onSave={onSave} onDelete={onDelete}
                movies={moviesForDisplay}
                ></MoviesCardList></>
        </main>

        
    )
}

export default SavedMovies;