import './Footer.css';

function Footer() {

    return (
        <footer className='footer'>
            <div className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm</div>
            <div className='footer__content'>
            <p className='footer__copyright'>&copy;&nbsp;2023</p>
                <ul className='footer__items'>
                    <li><a href="https://practicum.yandex.ru" target='blank' className='footer__items-title'>Яндекс.Практикум</a></li>
                    <li><a href="https://github.com/olkolesnikova/"className='footer__items-title'>GitHub</a></li>
                    
                </ul>
            </div>
        </footer>

    )
}

export default Footer;