import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import userService from '../services/userService';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  //obtner datos del usuario si existe el token
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await userService(token);
        setUser(user);
      } catch (err) {
        alert(err.message);
      }
    };
    //si exister token obtenemos los datos del usuario
    if (token) fetchUser();
  }, [token]);

  //funcion de login
  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };
  //funcion de logout
  const logout = (newToken) => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.proptype = {
  children: PropTypes.node,
};

export { AuthContext, AuthProvider };
