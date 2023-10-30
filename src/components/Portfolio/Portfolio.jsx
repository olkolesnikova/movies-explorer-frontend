import './Portfolio.css';

function Portfolio() {

    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <p className='portfolio__item-title'>Статичный сайт</p>
                    <a href="github" className='portfolio__item-link'>&#8599;</a>
                </li>
                <li className='portfolio__item'>
                    <p className='portfolio__item-title'>Адаптивный сайт</p>
                    <a href="github" className='portfolio__item-link'>&#8599;</a>
                </li>
                <li className='portfolio__item'>
                    <p className='portfolio__item-title'>Одностраничное приложение</p>
                    <a href="github" className='portfolio__item-link'>&#8599;</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;