import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NoteSearchPage from './pages/NoteSearchPage/NoteSearchPage';
import Footer from './components/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NoteCreatePage from './pages/NoteCreatePage/NoteCreatePage';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<NoteSearchPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/message' element={<NoteCreatePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
