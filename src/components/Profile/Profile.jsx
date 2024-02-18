import './../Profile/Profile.css';
import { useFormWithValidation } from '../hooks/useForm';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';

function Profile({ onSignOut, onUpdate, errorOnUpdate, setErrorOnUpdate }) {

    const { values, setValues, handleChange, errors, isValid } = useFormWithValidation();
    const [isInputDisabled, setIsInputDisabled] = useState(true);
    const currentUser = useContext(CurrentUserContext);

    console.log(currentUser);

    useEffect(() => {
        setValues({ name: currentUser.name, email: currentUser.email});
        
    }, [])

    function onSubmit(event) {
        event.preventDefault();
        onUpdate({
            name: values.name,
            email: values.email
        })
    }

    function handleClick() {
        setIsInputDisabled(false);
        setErrorOnUpdate('')
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
                            disabled={isInputDisabled} />
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
                            disabled={isInputDisabled} />
                    </div>
                    <span className='profile-email-error profile__form-input-value-error'>
                        {errors.email || ''}
                    </span>

                    <p className='profile__error'>{errorOnUpdate}</p>

                    <button type='submit' className={isInputDisabled ?
                        'profile__edit-link' : 'profile__save-link profile__save-link_type_disabled' && isValid ?
                            'profile__save-link' : 'profile__save-link profile__save-link_type_disabled'}
                        onClick={handleClick}
                    >
                        
                        {isInputDisabled ? 'Редактировать' : 'Сохранить'}
                    </button>
                </form>
                
                {isInputDisabled && (
                    <p className='profile__exit-link'><Link to="/" className='profile__exit-link-text'
                        onClick={onSignOut}

                    >Выйти из аккаунта</Link></p>

                )}
            </section>
        </main>
    )
}

export default Profile;