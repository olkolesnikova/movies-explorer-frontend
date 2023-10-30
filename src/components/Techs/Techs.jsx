import './Techs.css';
import '../../index.css';

function Techs() {

    return (
        <section className='techs'>
            <div className='about-project__header page__techs'>
                <h2 className='about-project__title'>Технологии</h2>
            </div>
            <h2 className='techs__title'>7 технологий</h2>
            <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__list'>
                <li className='techs__list-item'>HTML</li>
                <li className='techs__list-item'>CSS</li>
                <li className='techs__list-item'>JS</li>
                <li className='techs__list-item'>React</li>
                <li className='techs__list-item'>Git</li>
                <li className='techs__list-item'>Express.js</li>
                <li className='techs__list-item'>mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;