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
import { moviesApi } from '../utils/MoviesApi';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation().pathname;
  const [currentUser, setCurrentUser] = useState(null);
  const [inited, setInited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');


  useEffect(() => {

    if (loggedIn) {
      mainApi.getUserInfo()
        .then((currentUser) => {
          console.log(currentUser);
          setCurrentUser({
            name: currentUser.name,
            email: currentUser.email,

          })
        })
        .catch(console.error)
    }

  }, [loggedIn])

  

    /* moviesApi.getMovies()
    .then((response) => {
      console.log(response)
      setMovies(response)
    })
    .catch(console.error) */
  
  

  /* const getMovies = () => {
    moviesApi.getMovies()
      .then((response) => {
        
          setMovies(response)
        console.log(response);
        
        
      })
      .catch(console.error)
  } */

  /* useEffect(() => {
    getMovies();
  }, []) */

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

    auth.register({ name, email, password })
      .then((res) => {
        if (!res || res.status === 400) {
          console.log(res);
          return res.data;
        }
        else {

          navigate('/signin');
        }

      })
      .catch(console.error)
  }

  function handleLogin({ email, password }) {

    if (!email || !password) return;

    auth.authorize({ email, password })
      .then((data) => {
        console.log(data);
        if (data) {
          setCurrentUser({
            name: data.name,
            email: data.email,
            id: data._id
          })
          setLoggedIn(true);
          navigate('/');
        }
      })
      .catch(console.error)
  }

  function handleSignOut() {

    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({
          name: currentUser.name,
          email: currentUser.email,

        })
      })
      .catch(console.error)
  }


  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className='page'>

        {(location === '/' ||
          location === '/movies' ||
          location === '/profile' ||
          location === '/saved-movies') && <Header loggedIn={loggedIn} />}

        <Routes>

          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
          <Route path='/signup' element={<Register onLogin={handleRegister} />} />

          <Route path='/' element={<Main onSignOut={handleSignOut} />} />
          <Route path='/movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies searchValue={searchValue} setSearchValue={setSearchValue} />
            </ProtectedRoute>
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies></SavedMovies>
            </ProtectedRoute>
          }>

          </Route>

          <Route path='/profile' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile onSignOut={handleSignOut} />
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