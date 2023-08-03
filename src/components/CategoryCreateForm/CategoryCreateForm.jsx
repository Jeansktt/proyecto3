import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import categoryService from '../../services/categoryService';

const CategoryCreateForm = ({ token }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      await categoryService(name, token);

      //redireccionar a la pagina principal
      navigate('/');
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Crea tu categoría</h2>
      <label htmlFor='title'>Titulo:</label>
      <input
        type='text'
        id='title'
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
          
      <button disabled={loading}>Guardar</button>

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
  );
};

CategoryCreateForm.propTypes = {
  token: PropTypes.string,
};

export default CategoryCreateForm;
