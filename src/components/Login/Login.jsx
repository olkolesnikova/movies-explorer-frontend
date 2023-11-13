import LoginForm from "../LoginForm/LoginForm";
import headerLogo from '../../images/logo-header.svg';
import { Link } from "react-router-dom"
import './Login.css';
import { useFormWithValidation } from '../hooks/useForm';


function Login() {

    const { isValid } = useFormWithValidation();
    console.log(isValid);

    return (
        <main className="login">
            <div className="login__icon">
                <Link to='/'>
                    <img src={headerLogo} alt="" className="login__icon-logo" />
                </Link>
            </div>
            <h1 className="login__title">Рады видеть!</h1>            
                
                <LoginForm isDisabled={!isValid}></LoginForm>
                
            <p className="login__link-bottom">Ещё не зарегистрированы? <Link to="/signup" className="login__link-register">Регистрация</Link></p>
        </main>

    )
}

export default Login;