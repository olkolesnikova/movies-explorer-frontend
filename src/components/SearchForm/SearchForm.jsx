import './SearchForm.css';
import '../../index.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

    return (
        <section className='searchForm'>
            <form className='searchForm__area page__searchForm'>

                <div className='searchForm__field'>
                    <input type='text' placeholder='Фильм' className='searchForm__input' required />
                    <button type='submit' className='searchForm__area-button'>Поиск</button>
                </div>

                <div className='searchForm__checkbox'>
                    <FilterCheckbox></FilterCheckbox>
                </div>

            </form>

        </section>
    )
}

export default SearchForm;