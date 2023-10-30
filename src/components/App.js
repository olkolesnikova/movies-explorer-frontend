import '../../src/index.css';
import Main from './Main/Main';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Footer from './Footer/Footer';

function App() {

  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation().pathname;

  return (

    <div className='page'>

      {(location === '/' ||
        location === '/movies' ||
        location === '/profile' ||
        location === '/saved-movies') && <Header loggedIn={loggedIn} />}
      <main>
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />

        </Routes>
      </main>
      {(location === '/' ||
        location === '/movies' ||
        location === '/profile' ||
        location === '/saved-movies') && <Footer />}
    </div>
  )
}

export default App;