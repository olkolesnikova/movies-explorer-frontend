import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import moviesCardImage from '../../images/card-image.png';
import moviesCardImageSecond from '../../images/card-image2.png'
import { useState } from 'react';

function MoviesCardList() {

    const [isSaved, setIsSaved] = useState(true);

    return (
        <section className='moviesCardList'>
            <div className='moviesCardList__elements page__moviesCardList'>
                <MoviesCard cardImage={moviesCardImage}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} isSaved={isSaved}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} isSaved={isSaved}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond}></MoviesCard>
                
            </div>
        </section>
    )
}

export default MoviesCardList;