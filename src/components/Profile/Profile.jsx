import './../Profile/Profile.css';
import { useFormWithValidation } from '../hooks/useForm';
import { useState } from 'react';

function Profile() {

    const { values, handleChange } = useFormWithValidation();
    const [isInputDisabled, setIsInputDisabled] = useState(true);

    return (
        <section className='profile'>
            <h1 className='profile__title page__profile'>Привет, Виталий!</h1>
            <form action="" className='profile__form' name='profileForm'>
                <div className='profile__form-input'>
                    <label htmlFor="username" className='profile__form-input-title'>Имя</label>
                    <input id='username' type="text" name="username" className='profile__form-input-value'
                        placeholder='Имя'
                        minLength={2}
                        maxLength={30}
                        required
                        value={values.username || ""}
                        onChange={handleChange}
                        disabled={isInputDisabled} />
                </div>

                <div className='profile__form-input'>
                    <label htmlFor="email" className='profile__form-input-title'>E-mail</label>
                    <input id='email' type="text" name="email" className='profile__form-input-value'
                        placeholder='E-mail'
                        minLength={2}
                        maxLength={30}
                        required
                        value={values.email || ""}
                        onChange={handleChange}
                        disabled={isInputDisabled} />
                </div>
            </form>
            <button type='submit' className={isInputDisabled ? 'profile__edit-link' : 'profile__save-link'} onClick={() => setIsInputDisabled(false)}>
                {isInputDisabled ? 'Редактировать' : 'Сохранить'}
            </button>
            
            {isInputDisabled && (
               <p className='profile__exit-link'><a href="/" className='profile__exit-link-text'>Выйти из аккаунта</a></p> 
            )}
        </section>

    )
}

export default Profile;