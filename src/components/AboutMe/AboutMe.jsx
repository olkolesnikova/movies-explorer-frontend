import './AboutMe.css';
import '../AboutProject/AboutProject.css';
import '../../index.css';
import aboutMePhoto from '../../images/about-me-photo.jpg'

function AboutMe() {

    return (
        <section className='about-me'>
            <div className='about-me__header page__about-me'>
                <p className='about-me__title'>Студент</p>
            </div>

            <div className='about-me__content'>
                <div className='about-me__content-info'>
                    <h2 className='about-me__main-title'>Ольга</h2>
                    <p className='about-me__subtitle'>Фронтенд-разработчик, 33 года</p>
                    <p className='about-me__description'>Я родилась и живу в Екатеринбурге, выросла в городе Качканар Свердловской области.
                        Закончила металлургический факультет Уральского Федерального университета.
                        В данный момент работаю инженером по тестированию в компании МТС. </p>
                    
                    <a href="https://github.com/olkolesnikova/" className='about-me__link' target='blank'>Github</a>
                </div>

                <div>
                    <img src={aboutMePhoto} alt="Фотография автора проекта" className='about-me__photo' />
                </div>
            </div>

        </section>
    )
}

export default AboutMe;

