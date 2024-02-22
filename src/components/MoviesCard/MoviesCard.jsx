import './MoviesCard.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onSave, onDelete, savedMovies }) {

  const { pathname } = useLocation();
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    if (pathname === '/movies')
      setIsSaved(savedMovies.some(element => movie.id === element.movieId))
  }, [savedMovies, movie.id, setIsSaved, pathname])

  function toggleSaveMovie(movie) {

    if (savedMovies.some(element => movie.id === element.movieId)) {
      onDelete(movie)
      setIsSaved(false)
    } else {
      onSave(movie)
      setIsSaved(true)
    }
  };

  function handleToggleSaveMovie() {
    toggleSaveMovie({
      ...movie,
      movieId: movie.id
    });
  };

  function handleDeleteMovie() {
    onDelete(movie);
  };


  return (

    <li className='movies__card'>
      <div className='movies__card-description'>
        <h2 className='movies__card-title'>{movie.nameRU}</h2>
        <p className='movies__card-duration'>{Math.floor(movie.duration / 60)}ч {movie.duration % 60}м</p>
      </div>
      <Link to={movie.trailerLink}>
        <img src={pathname === '/movies' ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image} alt="" className='movies__card-image' />
      </Link>

      {pathname === "/movies" ? (
        <button
          type="button"
          className={isSaved ? 'movies__card-button movies__card-button_type_saved' : 'movies__card-button'}
          onClick={handleToggleSaveMovie}
        ></button>
      ) : (
        <button
          type="button"
          className={`movies__card-button movies__card-button_type_saved-page`}
          onClick={handleDeleteMovie}
        ></button>
      )}
    </li>

  )
}

export default MoviesCard;