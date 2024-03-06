import '../LoginForm/LoginForm.css';
import { useFormWithValidation } from '../hooks/useForm';


function RegisterForm({ onLogin, isRegisterError }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();


    function handleSubmit(event) {

        event.preventDefault();
        onLogin({
            name: values.name,
            email: values.email,
            password: values.password
        })
        resetForm();
    }

    return (

        <form className="loginForm" onSubmit={handleSubmit}>

            <div className='loginForm__input'>
                <label htmlFor="loginForm-name" className='loginForm__input-title'>Имя</label>
                <input id='loginForm-name' type="text" name="name" className='loginForm__input-value'
                    placeholder='Имя'
                    minLength={2}
                    maxLength={30}
                    required
                    value={values.name || ""}
                    onChange={handleChange}
                />
                <span className='loginForm-name-error loginForm__input-value-error'>
                    {errors.name || ""}
                </span>
            </div>

            <div className='loginForm__input'>
                <label htmlFor="loginForm-email" className='loginForm__input-title'>E-mail</label>
                <input id='loginForm-email' type="email" name="email" className='loginForm__input-value'
                    placeholder='E-mail'
                    minLength={2}
                    maxLength={30}
                    required
                    pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
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
            <p className='loginForm__error'>{isRegisterError}</p>
            <button type="submit"
                className={isValid ? 'loginForm__button loginForm__button_type_register' : 'loginForm__button loginForm__button_type_register loginForm__button_type_disabled'}>Зарегистрироваться</button>

        </form>
    )
}

export default RegisterForm;