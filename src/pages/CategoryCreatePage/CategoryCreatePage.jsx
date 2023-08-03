import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import CategoryCreateForm from '../../components/CategoryCreateForm/CategoryCreateForm';

const CategoryCreatePage = () => {
  const {token} = useAuth();

  if (!token) return <Navigate to='/' />;

  return (
    <main className='categoryCreate'>
      <CategoryCreateForm token={token} />
    </main>
  );
};

export default CategoryCreatePage;