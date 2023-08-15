import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './HomePage.css';

const HomePage = () => {
    const { token, logout, user } = useAuth();

    return (
        <div className='home-page'>
            <h1>Bienvenido a TravelNotes</h1>
            <p>
                ¡Descubre los lugares más increíbles para viajar y guarda tus
                notas de viaje en TravelNotes!
            </p>
            <nav className='buttons'>
                {user && <p>Bienvenidx @{user.username}</p>}
                {!token && (
                    <>
                        <div
                            className='button-login'
                            onClick={() => (window.location.href = '/login')}
                        >
                            <div className='clickable-button'>
                                <NavLink to='/login'>Login</NavLink>
                            </div>
                        </div>
                        <div
                            className='button-register'
                            onClick={() => (window.location.href = '/register')}
                        >
                            <div className='clickable-button'>
                                <NavLink to='/register'>Registro</NavLink>
                            </div>
                        </div>
                    </>
                )}
                {token && (
                    <>
                        <div
                            className='button-message clickable-button'
                            onClick={() => (window.location.href = '/message')}
                        >
                            <NavLink to='/message'>Añadir Nueva Nota</NavLink>
                        </div>
                        <div
                            className='button-close clickable-button'
                            onClick={logout}
                        >
                            <p>Cerrar sesión</p>
                        </div>
                        <div
                            className='button-notes clickable-button'
                            onClick={() => (window.location.href = '/notes')}
                        >
                            <NavLink to='/notes'>Ver Notas</NavLink>
                        </div>
                    </>
                )}
            </nav>
        </div>
    );
};

export default HomePage;
