import '../Menu/Menu.css';
import '../Header/Header.css';
import headerAccountLink from '../../images/account-icon-svg.svg';

function Menu({ isOpen, onClose }) {

    return (

        
            <div className={isOpen ? "menu menu_open menu_open-background" : "menu"}>

                <button type='button' className='menu__button-close' onClick={onClose}></button>
                <div className="menu__content">
                    <ul className='menu__list'>
                        <li className='menu__list-item'><a href="/" className='menu__list-item-link'>Главная</a></li>
                        <li className='menu__list-item'><a href="/movies" className='menu__list-item-link'>Фильмы</a></li>
                        <li className='menu__list-item'><a href="/saved-movies" className='menu__list-item-link'>Сохранённые фильмы</a></li>
                    </ul>

                    <div className='menu__profile-link'>
                        <a href="/profile" className='menu__account-link'>Аккаунт</a>
                        <a href="/profile" className='menu__account-button'>
                            <img alt="" src={headerAccountLink} className="menu__account-icon" />
                        </a>

                        

                    </div>

                </div>
            </div>
        






    )
}

export default Menu;