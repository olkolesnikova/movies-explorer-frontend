import '../../src/index.css';
import Main from './Main/Main';
import { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Register from './Register/Register';
import Footer from './Footer/Footer';
import PageNotFound from './PageNotFound/PageNotFound';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { mainApi } from '../utils/MainApi';
import * as auth from '../utils/auth';
import Cookies from 'js-cookie';
import ProtectedRoute from './ProtectedRoute';
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') || false);
  const location = useLocation().pathname;
  const [currentUser, setCurrentUser] = useState({});
  const [inited, setInited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [savedMovies, setSavedMovies] = useLocalStorage('savedMovies', []);
  const [searchValue, setSearchValue] = useLocalStorage('searchValue', '');
  const [errorOnUpdate, setErrorOnUpdate] = useState('');
  const [isDisabledInput, setIsDisabledInput] = useState(false);
  const [isServerError, setIsServerError] = useState('');
  const [isLoginError, setIsLoginError] = useState('')

  useEffect(() => {

    if (loggedIn) {
      mainApi.getUserInfo()
        .then((currentUser) => {
          console.log(currentUser);
          localStorage.setItem('loggedIn', true);
          setCurrentUser({
            name: currentUser.name,
            email: currentUser.email,
            id: currentUser._id,
          })
        })
        .catch(console.error)
    }
  }, [loggedIn])

  const resetErrorMessage = useCallback(() => {
    setIsServerError('')
  }, [])

  useEffect(() => {
    resetErrorMessage()
  }, [resetErrorMessage, navigate]);

  function handleUpdateUser({ name, email }) {

    setIsDisabledInput(true)
    mainApi.updateUserInfo({ name, email })
      .then(() => {

        setCurrentUser({ name, email });
        setErrorOnUpdate('Данные обновлены');

      })
      .catch((error) => {
        console.log(error);
        setErrorOnUpdate(error);
      })
      .finally(() => {
        setIsDisabledInput(false)
      });
  }

  useEffect(() => {
    tokenCheck();
  }, [])

  const tokenCheck = () => {

    const jwt = Cookies.get('jwt');

    if (jwt) {
      auth.getContent()
        .then((data) => {
          setCurrentUser({
            name: data.name,
            email: data.email,

          })
          setLoggedIn(true);
          navigate('/movies');

        })
        .catch(console.error)
        .finally(() => {
          setInited(true)
        })
    } else {
      setInited(true)
    }
  }

  if (!inited) {
    return null;
  }

  function handleRegister({ name, email, password }) {   

    auth
      .register({ name, email, password })
      .then((data) => {
        if (data) {
          navigate('/signin');
        }
      })
      .catch((err) => {
        if (err.message) {
          err.message.includes('401') &&
          setIsServerError('Failed to fetch');
        }
        if (err.includes('400')) {
          setIsServerError('Введены некорректные данные');
        }
        else if (err.includes('409')) {
          setIsServerError('Пользователь с таким email уже зарегистрирован');
        }
        else {
          setIsServerError('500');
        }
      })
  }

  function handleLogin({ email, password }) {

    if (!email || !password) return;

    auth
      .authorize({ email, password })
      .then((data) => {
        if (data) {
          setCurrentUser({
            name: data.name,
            email: data.email,
            id: data._id
          })
          setLoggedIn(true);
          navigate('/movies');

        }
      })
      .catch((err) => {
        if (err.message) {
          err.message.includes('400') &&
            setIsLoginError('Failed to fetch');
        }
        if (err.includes('401')) {
          setIsLoginError('Введены некорректные данные');
        }
        else {
          setIsLoginError('Что-то пошло не так! Пожалуйста повторите попытку позже');
        }
      })
  }

  function handleSignOut() {

    mainApi.signOut()
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/');
        setCurrentUser({});
        setSavedMovies([]);
      })
      .catch(console.error)
  }


  function saveMovie(movie) {

    mainApi.saveMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie])
      })
      .catch(console.error);
  };

  function deleteMovie(movie) {

    const savedMovie = savedMovies.find((item) => item.movieId === movie.movieId);
    mainApi.deleteMovie(savedMovie._id)
      .then(() => {
        const newSavedMoviesArray = savedMovies.filter((item) => item.movieId !== movie.movieId)
        setSavedMovies(newSavedMoviesArray);
      })
      .catch(console.error);
  };


  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className='page'>

        {(location === '/' ||
          location === '/movies' ||
          location === '/profile' ||
          location === '/saved-movies') && <Header loggedIn={loggedIn} />}

        <Routes>

          <Route path='/signin' element={<Login onLogin={handleLogin} isLoginError={isLoginError} />} />
          <Route path='/signup' element={<Register onLogin={handleRegister} isServerError={isServerError} />} />

          <Route path='/' element={<Main onSignOut={handleSignOut} />} />
          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onSave={saveMovie}
                onDelete={deleteMovie}
                isLoading={isLoading}

              />
            </ProtectedRoute>
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                onSave={saveMovie}
                onDelete={deleteMovie}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                isLoading={isLoading}
              ></SavedMovies>
            </ProtectedRoute>
          }>

          </Route>

          <Route path='/profile' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                onSignOut={handleSignOut}
                onUpdate={handleUpdateUser}
                errorOnUpdate={errorOnUpdate}
                setErrorOnUpdate={setErrorOnUpdate}
                isDisabledInput={isDisabledInput}
              />
            </ProtectedRoute>
          }>

          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Routes>


        {(location === '/' ||
          location === '/movies' ||
          location === '/saved-movies') && <Footer />}
      </div>
    </CurrentUserContext.Provider>

  )
}

export default App;