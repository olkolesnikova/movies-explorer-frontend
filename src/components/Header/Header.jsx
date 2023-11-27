import headerLogo from '../../images/logo-header.svg';
import headerAccountLink from '../../images/account-icon-svg.svg';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Menu from '../Menu/Menu';
import { useMenuClose } from '../hooks/useMenuClose';

const Header = ({ loggedIn }) => {

    const location = useLocation().pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false)

    }

    useMenuClose(isMenuOpen, closeMenu);
      
    
    return (
        <><header className={(location === '/movies' ||
            location === '/profile' ||
            location === '/saved-movies') ? 'header header_type_black' : 'header'}>

            <Link to='/'>
                <img src={headerLogo} alt="Логотип проекта Bitfilms" className="header__logo" />
            </Link>

            {!loggedIn && (
                <nav className='header__links'>
                    <Link to='/signup' className='header__registration-link'>Регистрация</Link>
                    <Link to='/signin' className='header__entry-link'>
                        Войти
                    </Link>
                </nav>
            )}
            {loggedIn && (
                <><nav className='header__nav-links'>
                    <Link to='/movies' className='header__films-link'>Фильмы</Link>
                    <Link to='/saved-movies' className='header__films-link'>Сохраненные фильмы</Link>
                    <div className='header__profile-link'>
                        <a href="/profile" className='header__account-link'>Аккаунт</a>
                        <a href="/profile" className={(location === '/movies' ||
                            location === '/profile' ||
                            location === '/saved-movies') ? 'header__account-button header__account-button_type_black' : 'header__account-button'}>
                            <img alt="Иконка кнопки аккаунта" src={headerAccountLink} className="header__account-icon" />
                        </a>
                    </div>
                </nav>

                    <button type='button' className='header__burger' onClick={toggleMenu}></button></>
            )}

        </header>
        <Menu isOpen={isMenuOpen} onClose={closeMenu}></Menu></>
    )
}

export default Header;