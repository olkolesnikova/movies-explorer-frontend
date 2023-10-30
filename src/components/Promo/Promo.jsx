import './Promo.css';
import promoPicture from '../../../src/images/promo-picture-svg.svg'

function Promo() {

    return (
        <section className='promo'>
            <img src={promoPicture} alt="" className='promo__picture' />
            <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>

            <a href="#about-project" className='promo__button'>
                <button type='button' className='promo__button-text'>Узнать больше</button>
            </a>

        </section>

    )
}

export default Promo;