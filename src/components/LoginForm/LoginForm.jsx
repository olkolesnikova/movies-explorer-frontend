import './LoginForm.css';
import { useFormWithValidation } from '../hooks/useForm';

function LoginForm({ isDisabled = false }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();

    return (

        <form className="loginForm">
            <div className='loginForm__input'>
                <label htmlFor="loginForm-email" className='loginForm__input-title'>E-mail</label>
                <input id='loginForm-email' type="email" name="email" className='loginForm__input-value'
                    placeholder='E-mail'
                    minLength={2}
                    maxLength={30}
                    required
                    value={values.email || ""}
                    onChange={handleChange}
                />
                <span className='loginForm-email-error loginForm__input-value-error'>
                    {errors.email || ""}
                </span>
            </div>

            <div className='loginForm__input'>
                <label htmlFor="loginForm-password" className='loginForm__input-title'>Пароль</label>
                <input id='loginForm-password' type="password" name="password" className='loginForm__input-value'
                    placeholder='Пароль'
                    required
                    minLength={2}
                    maxLength={8}
                    value={values.password || ""}
                    onChange={handleChange}
                />
                <span className='loginForm-password-error loginForm__input-value-error'>
                    {errors.password || ""}
                </span>
            </div>
            <button type="submit" disabled={isDisabled}
                className={isValid ? 'loginForm__button' : 'loginForm__button loginForm__button_type_disabled'}>Войти</button>

        </form>
    )
}

export default LoginForm;