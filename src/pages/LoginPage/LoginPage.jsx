import LoginForm from '../../components/LoginForm/LoginForm';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { token, login } = useAuth();
  if (token) return <Navigate to='/' />;

  //si la persona esta logueada la redirigimos a la pagina principal
  return (
    <main className='Login'>
      <LoginForm login={login} />
    </main>
  );
};

export default LoginPage;
