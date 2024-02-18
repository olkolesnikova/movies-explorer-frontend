import './MoviesCard.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onSave, onDelete, savedMovies }) {

  const [isSaved, setIsSaved] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/movies')
      setIsSaved(savedMovies.some(element => movie.id === element.movieId))
  }, [savedMovies, movie.id, setIsSaved, pathname])

   
  function onClickSave() {
    if (savedMovies.some(element => movie.id === element.movieId)) {
      setIsSaved(true)
      onSave(movie)
    } else {
      setIsSaved(false)
      onSave(movie)
    }
  }

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
          className={`movies__card-button ${isSaved ? "movies__card-button_type_saved" : ""}`}
          onClick={onClickSave}
        ></button>
      ) : (
        <button
          type="button"
          className={`movies__card-button movies__card-button_type_saved-page`}
          onClick={() => onDelete(movie._id)}
        ></button>
      )}      
    </li>

  )
}

export default MoviesCard;