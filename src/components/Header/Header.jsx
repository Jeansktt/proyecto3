import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { token, logout, user } = useAuth();
  return (
    <header>
      <h1>Travel notes</h1>
      <nav>
        {user && <p>@{user.username}</p>}
        {!token && (
          <>
            <div className='button'>
              <NavLink to='/login'>Login</NavLink>
            </div>
            <div>
              <NavLink to='/register'>Registro</NavLink>
            </div>
          </>
        )}
        {token && (
          <>
            <div className='button'>
              <NavLink to='/message'>Mensaje</NavLink>
            </div>
            <div className='button' onClick={() => logout()}>
              <p>cerrar sesion</p>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
