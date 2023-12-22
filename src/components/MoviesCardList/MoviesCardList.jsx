import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import moviesCardImage from '../../images/card-image.png';
import moviesCardImageSecond from '../../images/card-image2.png'
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi';

function MoviesCardList({ movies, searchValue }) {

    const [isSaved, setIsSaved] = useState(false);

    console.log(searchValue);

    /* function handleSearch() {

        const filteredMovies = movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
        })
    } */

    
    /* const filteredMovies = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
    }) */
    


    return (
        <section className='moviesCardList page__moviesCardList'>
            <ul className='moviesCardList__elements'>
                {/* <MoviesCard cardImage={moviesCardImage} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} isSaved={isSaved} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} isSaved={isSaved} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard>
                <MoviesCard cardImage={moviesCardImageSecond} alt={'Постер к фильму'}></MoviesCard> */}
                {
                    movies.map((movie) => {

                        return (
                            <MoviesCard
                                key={movie._id}
                                movie={movie}
                            ></MoviesCard>
                        )


                    })
                }

            </ul>


        </section>
    )
}

export default MoviesCardList;