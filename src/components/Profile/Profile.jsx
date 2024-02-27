import './../Profile/Profile.css';
import { useFormWithValidation } from '../hooks/useForm';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';

function Profile({ onSignOut, onUpdate, errorOnUpdate, setErrorOnUpdate, isDisabledInput }) {

    const [isVisible, setIsVisible] = useState(false);
    const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    const currentUser = useContext(CurrentUserContext);
    const [isDisabled, setIsDisabled] = useState(false);

    console.log(currentUser);

    useEffect(() => {
        setValues({ name: currentUser.name, email: currentUser.email });

    }, [currentUser.email, currentUser.name, setValues])

    useEffect(() => {
        if (currentUser.name !== values.name || currentUser.email !== values.email) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }

    }, [values, isValid, currentUser]);

    function changeVisibility () {
        setIsVisible(true);
        setErrorOnUpdate('')
    }

    
    function onSubmit(event) {
        event.preventDefault();
        onUpdate({
            name: values.name,
            email: values.email
        })
        resetForm();
    }

    
    return (
        <main>
            <section className='profile'>
                <h1 className='profile__title page__profile'>{`Привет, ${currentUser.name}!`}</h1>
                <form action="#" className='profile__form' name='profileForm' onSubmit={onSubmit}>
                    <div className='profile__form-input'>
                        <label htmlFor="profile-name" className='profile__form-input-title'>Имя</label>
                        <input id='profile-name' type="text" name="name" className='profile__form-input-value'
                            placeholder='Имя'
                            minLength={2}
                            maxLength={30}
                            required
                            value={values.name || ''}
                            onChange={handleChange}
                            disabled={(isVisible ? false : true) || isDisabledInput} />
                    </div>
                    <span className='profile-name-error profile__form-input-value-error'>
                        {errors.name || ""}
                    </span>

                    <div className='profile__form-input'>
                        <label htmlFor="profile-email" className='profile__form-input-title'>E-mail</label>
                        <input id='profile-email' type="email" name="email" className='profile__form-input-value'
                            placeholder='E-mail'
                            minLength={2}
                            maxLength={30}
                            required
                            value={values.email || ''}
                            onChange={handleChange}
                            disabled={(isVisible ? false : true) || isDisabledInput} />
                    </div>
                    <span className='profile-email-error profile__form-input-value-error'>
                        {errors.email || ''}
                    </span>

                    {isVisible ? (
                        <>
                            <span className='profile__error'>
                                {errorOnUpdate}
                            </span>
                            <button
                                className={`profile__button-save button ${!isValid || !isDisabled ? 'profile__button-save_disabled' : ''}`}
                                type="submit"
                                onClick={changeVisibility}
                                disabled={!isValid || !isDisabled}
                            >
                                Сохранить
                            </button>
                        </>) : (<>
                            <button
                                className={`profile__button-edit button ${!isValid || !isDisabled ? 'profile__button-edit_disabled' : ''}`}
                                type="submit"
                                onClick={changeVisibility}
                            >
                                Редактировать
                            </button>
                            <p className='profile__exit-link'><Link to="/" className='profile__exit-link-text'
                                onClick={onSignOut}

                            >Выйти из аккаунта</Link></p>
                        </>)}
                </form>                
            </section>
        </main>
    )
}

export default Profile;