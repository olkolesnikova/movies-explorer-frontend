import './AboutProject.css';
import '../../index.css';

function AboutProject() {

    return (
        <section className='about-project'>
            <div className='about-project__header page__about-project'>
                <h2 id='about-project' className='about-project__title'>О проекте</h2>
            </div>
            <div className='about-project__info'>
                <div className='about-project__info-column'>
                    <h3 className='about-project__info-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__info-paragraph'>Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__info-column'>
                    <h3 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__info-paragraph'>У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__scale'>
                <div className='about-project__scale-cell about-project__scale-cell_type_green'>
                    <p className='about-project__scale-cell-text'>1 неделя</p>
                </div>
                <div className='about-project__scale-cell about-project__scale-cell_type_gray'>
                    <p className='about-project__scale-cell-text'>4 недели</p>
                </div>
                <div className='about-project__scale-cell'>
                    <p className='about-project__scale-description'>Back-end</p>
                </div>
                <div className='about-project__scale-cell'>
                    <p className='about-project__scale-description'>Front-end</p>
                </div>
            </div>

        </section>
    )
}

export default AboutProject;