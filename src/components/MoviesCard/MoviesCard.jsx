import './MoviesCard.css';

function MoviesCard({ cardImage, isSaved, alt }) {

    return (
        
            <li className='movies__card'>
                <div className='movies__card-description'>
                    <h2 className='movies__card-title'>В погоне за Бенкси</h2>
                    <p className='movies__card-duration'>0ч 42м</p>
                </div>
                <img src={cardImage} alt={alt} className='movies__card-image' />
                <button type='submit' className={(isSaved ? 'movies__card-button movies__card-button_type_saved' : 'movies__card-button')}></button>
            </li>
        
    )
}

export default MoviesCard;