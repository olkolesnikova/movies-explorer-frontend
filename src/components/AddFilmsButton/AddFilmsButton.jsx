import './AddFilmsButton.css';

function AddFilmsButton({ movies, moviesForDisplay, onClick }) {

    console.log(movies);
    console.log(moviesForDisplay);

    return (
        <section className='addFilmsButton'>
           
            {moviesForDisplay.length >= 5 && moviesForDisplay.length < movies.length && (
                <div className='addFilmsButton__area page__addFilmsButton'>
                <button type="submit" className='addFilmsButton__area-button' onClick={onClick}>Ещё</button>
            </div>
            )}
        </section>


    )
}

export default AddFilmsButton;