import './FilterCheckbox.css';
import { useState } from 'react';

function FilterCheckbox() {

    const [isFilterChecked, setIsFilterChecked] = useState(true);

    return (
        <div className='checkbox'>
            <div class="checkbox__switch">
                <input type="checkbox" name="switch" className="checkbox__switch-checkbox" id="switch" checked={isFilterChecked}
                onClick={() => {setIsFilterChecked(!isFilterChecked)}}
                />
                <label className="checkbox__switch-label" for="switch">
                    <span className='checkbox__switch-inner'></span>
                    <span className="checkbox__switch-switch"></span>
                </label>
            </div>


            <div className='checkbox__title'>
                <p className='checkbox__title-text'>Короткометражки</p>
            </div>
        </div>
    )
}

export default FilterCheckbox;