import './MoviesCard.css';

function MoviesCard({ movie, isSaved }) {

    return (
        
            <li className='movies__card'>
                <div className='movies__card-description'>
                    <h2 className='movies__card-title'>{movie.nameRU}</h2>
                    <p className='movies__card-duration'>{Math.floor(movie.duration / 60)}ч {movie.duration % 60}м</p>
                </div>
                <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt="" className='movies__card-image' />
                <button type='submit' className={(isSaved ? 'movies__card-button movies__card-button_type_saved' : 'movies__card-button')}></button>
            </li>
        
    )
}

export default MoviesCard;