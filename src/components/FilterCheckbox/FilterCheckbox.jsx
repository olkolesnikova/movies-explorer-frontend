import './FilterCheckbox.css';

function FilterCheckbox() {

    return (
        <div className='checkbox'>
            <div class="checkbox__switch">
                <input type="checkbox" name="switch" class="checkbox__switch-checkbox" id="switch" checked/>
                <label class="checkbox__switch-label" for="switch">
                    <span class="checkbox__switch-inner"></span>
                    <span class="checkbox__switch-switch"></span>
                </label>
            </div>


            <div className='checkbox__title'>
                <p className='checkbox__title-text'>Короткометражки</p>
            </div>
        </div>
    )
}

export default FilterCheckbox;