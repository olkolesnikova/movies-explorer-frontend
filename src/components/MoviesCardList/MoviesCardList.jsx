import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import moviesCardImage from '../../images/card-image.png';
import moviesCardImageSecond from '../../images/card-image2.png'
import { useState } from 'react';

function MoviesCardList() {

    const [isSaved, setIsSaved] = useState(true);

    return (
        <section className='moviesCardList'>
            <ul className='moviesCardList__elements page__moviesCardList'>
                <MoviesCard cardImage={moviesCardImage} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} isSaved={isSaved} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} isSaved={isSaved} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                
            </ul>
        </section>
    )
}

export default MoviesCardList;