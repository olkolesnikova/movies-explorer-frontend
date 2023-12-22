import RegisterForm from "../RegisterForm/RegisterForm";
import headerLogo from '../../images/logo-header.svg';
import { Link } from "react-router-dom"
import './../Login/Login.css';
import { useFormWithValidation } from "../hooks/useForm";


function Register({ onLogin }) {

    const { isValid } = useFormWithValidation();

    return (
        <main className="login">
            <div className="login__icon">
                <Link to='/'>
                    <img src={headerLogo} alt="" className="login__icon-logo" />
                </Link>
            </div>
            <h1 className="login__title">Добро пожаловать!</h1>
            <RegisterForm onLogin={onLogin}></RegisterForm>
            <p className="login__link-bottom">Уже зарегистрированы? <Link to="/signin" className="login__link-register">Войти</Link></p>
        </main>
    )
}

export default Register;