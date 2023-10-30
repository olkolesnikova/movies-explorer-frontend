import './AboutMe.css';
import '../AboutProject/AboutProject.css';
import '../../index.css';
import aboutMePhoto from '../../images/about-me-photo.jpg'

function AboutMe() {

    return(
        <section className='about-me'>
            <div className='about-project__header page__about-project'>
                <p className='about-project__title'>Студент</p>
            </div>
            <h2 className='about-me__title'>Ольга</h2>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 33 года</p>
            <p className='about-me__description'>Я родилась и живу в Екатеринбурге, выросла в городе Качканар Свердловской области.
            Закончила металлургический факультет Уральского Федерального университета.
            В данный момент работаю инженером по тестированию в компании МТС. </p>
            <p className='about-me__link'>Github</p>
            <div>
                <img src={aboutMePhoto} alt="" className='about-me__photo' />
            </div>
        </section>
    )
}

export default AboutMe;

