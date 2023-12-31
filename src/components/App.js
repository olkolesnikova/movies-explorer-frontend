import '../../src/index.css';
import Main from './Main/Main';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Register from './Register/Register';
import Footer from './Footer/Footer';
import PageNotFound from './PageNotFound/PageNotFound';


function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation().pathname;

  return (

    <div className='page'>

      {(location === '/' ||
        location === '/movies' ||
        location === '/profile' ||
        location === '/saved-movies') && <Header loggedIn={loggedIn} />}
      
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        
      
      {(location === '/' ||
        location === '/movies' ||
        location === '/saved-movies') && <Footer />}
    </div>
    
  )
}

export default App;