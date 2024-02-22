import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, onSave, onDelete, savedMovies, moviesRenderParams}) {

    const location = useLocation().pathname;

    return (
        <section className='moviesCardList page__moviesCardList'>
            <ul className='moviesCardList__elements'>

                {location === '/movies' &&
                    (movies.map((movie) => {

                        return (
                            <MoviesCard
                                key={movie._id}
                                movie={movie}
                                onSave={onSave}
                                onDelete={onDelete}
                                savedMovies={savedMovies}
                                id={movie.id}
                                moviesRenderParams={moviesRenderParams}
                                
                            ></MoviesCard>
                        )
                    })
                    )
                }

                {location === '/saved-movies' &&
                    (movies.map((movie) => {

                        return (
                            <MoviesCard
                                key={movie._id}
                                movie={movie}
                                onSave={onSave}
                                onDelete={onDelete}
                                savedMovies={savedMovies}
                                id={movie.id}
                                
                            ></MoviesCard>
                        )
                    })
                    )
                }
            </ul>
        </section>
    )
}

export default MoviesCardList;