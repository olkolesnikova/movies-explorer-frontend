import './SearchForm.css';
import '../../index.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../hooks/useForm';

function SearchForm({ searchValue, setSearchValue, onSearch, isFilterChecked, setIsFilterChecked }) {

    function handleSubmit(event) {
        event.preventDefault();
        onSearch();
    }

    return (
        <section className='searchForm'>
            <form className='searchForm__area page__searchForm'>

                <div className='searchForm__field'>
                    <input type='text' placeholder='Фильм' className='searchForm__input' required
                        name='query'
                        onChange={(event) => setSearchValue(event.target.value)}
                        value={searchValue} />
                    <button type='submit' className='searchForm__area-button'
                        onClick={handleSubmit}
                    >Поиск</button>
                </div>

                <div className='searchForm__checkbox'>
                    <FilterCheckbox
                        isFilterChecked={isFilterChecked}
                        setIsFilterChecked={setIsFilterChecked}>
                    </FilterCheckbox>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;