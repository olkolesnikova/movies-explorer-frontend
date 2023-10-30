import headerLogo from '../../images/logo-header.svg';
import headerAccountLink from '../../images/account-icon.png';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ loggedIn }) => {


    const location = useLocation().pathname;

    return (
        <header className={(location === '/movies' ||
            location === '/profile' ||
            location === '/saved-movies') ? 'header header_type_black' : 'header'}>

            <Link to='/'>
                <img src={headerLogo} alt="Логотип проекта Bitfilms" className="header__logo" />
            </Link>

            {!loggedIn && (
                <div className='header__links'>
                    <Link to='/signup' className='header__registration-link'>Регистрация</Link>
                    <Link to='/signin'>
                        <button type='button' className='header__entry-link'>Войти</button>
                    </Link>
                </div>
            )}
            {loggedIn && (
                <><div className='header__nav-links'>
                    <Link to='/movies' className='header__films-link'>Фильмы</Link>
                    <Link to='/saved-movies' className='header__films-link'>Сохраненные фильмы</Link>
                    <div className='header__profile-link'>
                        <Link to='/profile' className='header__account-link'>Аккаунт</Link>
                        <button type="button" className={(location === '/movies' ||
            location === '/profile' ||
            location === '/saved-movies') ? 'header__account-button header__account-button_type_black' : 'header__account-button'}>
                            <img type='button' alt="" src={headerAccountLink} className="header__account-icon" />
                        </button>
                    </div>
                </div>

                    <button type='button' className='header__burger-button'></button></>
            )}
        </header>
    )
}

export default Header;