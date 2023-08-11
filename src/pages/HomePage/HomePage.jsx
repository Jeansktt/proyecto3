import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './HomePage.css';
const HomePage = () => {
  const { token, logout, user } = useAuth();
  return (
    <div className='home-page'>
      <h1>Bienvenido a TravelNotes</h1>
      <p>
        ¡Descubre los lugares más increíbles para viajar y guarda tus notas de
        viaje en TravelNotes!
      </p>
      <nav className='buttons'>
        {user && <p>Bienvenidx @{user.username}</p>}
        {!token && (
          <>
            <div className='button-login'>
              <NavLink to='/login'>Login</NavLink>
            </div>
            <div className='button-register'>
              <NavLink to='/register'>Registro</NavLink>
            </div>
          </>
        )}
        {token && (
          <>
            <div className='button-message'>
              <NavLink to='/message'>Mensaje</NavLink>
            </div>
            <div className='button-close' onClick={() => logout()}>
              <p>cerrar sesion</p>
            </div>
            <div className='button-notes'>
              <NavLink to='/notes'>Ver Notas</NavLink>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default HomePage;
