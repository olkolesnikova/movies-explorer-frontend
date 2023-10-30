import './MoviesCard.css';

function MoviesCard({ cardImage, isSaved }) {

    


    return (          
    <div className='movies__card'>
        <div className='movies__card-description'>
            <p className='movies__card-title'>В погоне за Бенкси</p>
            <p className='movies__card-duration'>0ч 42м</p>
        </div>
            <img src={cardImage} alt="" className='movies__card-image' />
            <button type='submit' className={(isSaved ? 'movies__card-button movies__card-button_type_saved' : 'movies__card-button')}></button>
    </div>        
    )
}

export default MoviesCard;