import './Portfolio.css';
import arrowImage from '../../images/link-arrow.svg';

function Portfolio() {

    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <a href="https://github.com/olkolesnikova/how-to-learn" className='portfolio__item-title' target='blank'>
                        <div>Статичный сайт</div>
                        <div className='portfolio__item-link'>
                            <img src={arrowImage} className='portfolio__item-link-image' alt="" />
                        </div>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a href="https://github.com/olkolesnikova/russian-travel" className='portfolio__item-title' target='blank'>
                        <div>Адаптивный сайт</div>
                        <div className='portfolio__item-link'>
                            <img src={arrowImage} className='portfolio__item-link-image' alt="" />
                        </div>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a href="https://github.com/olkolesnikova/react-mesto-auth" className='portfolio__item-title' target='blank'>
                        <div>Одностраничное приложение</div>
                        <div className='portfolio__item-link'>
                            <img src={arrowImage} className='portfolio__item-link-image' alt="" />
                        </div>
                    </a>

                </li>
            </ul>
        </section>
    )
}

export default Portfolio;