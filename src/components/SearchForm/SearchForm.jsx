import './SearchForm.css';
import '../../index.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

    return (
        <section className='searchForm'>
            <form className='searchForm__area page__searchForm'>
                <input type='text' placeholder='Фильм' className='searchForm__area-input' />
                <button type='submit' className='searchForm__area-button'>Поиск</button>
            </form>
            <FilterCheckbox></FilterCheckbox>
        </section>
    )
}

export default SearchForm;