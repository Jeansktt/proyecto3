import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NoteSearchPage from './pages/NoteSearchPage/NoteSearchPage';
import Footer from './components/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NoteCreatePage from './pages/NoteCreatePage/NoteCreatePage';
import HomePage from './pages/HomePage/HomePage';
import CategoryCreatePage from './pages/CategoryCreatePage/CategoryCreatePage';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/notes' element={<NoteSearchPage />} />
        <Route path='/message' element={<NoteCreatePage />} />
        <Route path='categories' element={<CategoryCreatePage />} />
        {/* <Route exact path="/edit" component={<EditNotePage/>} /> */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
