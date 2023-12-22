import './Promo.css';
import promoPicture from '../../../src/images/promo-picture-svg.svg'

function Promo({ onSignOut }) {

    return (
        <section className='promo'>
            <div className='promo__content'>
                <div className='promo__content-text'>
                    <h1 className='promo__content-title' onClick={onSignOut}>Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className='promo__content-subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <div className='promo__content-picture'>
                    <img src={promoPicture} alt="Картинка земного шара, состоящая из слов web" className='promo__content-image' />
                </div>
            </div>

            <a href="#about-project" className='promo__button' >
                Узнать больше
            </a>

        </section>

    )
}

export default Promo;