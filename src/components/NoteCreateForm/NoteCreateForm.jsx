import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import createnoteService from '../../services/createnoteService';
import PropTypes from 'prop-types';

const NoteCreateForm = ({ token }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState();
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      await createnoteService(title, text, category, file, token);
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
      <h2>Crea tu nueva nota de viaje</h2>
      <label htmlFor='title'>Titulo:</label>
      <input
        type='text'
        id='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor='text'>Nota:</label>
      <input
        type='text'
        id='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
        required
      />

      <label htmlFor='category'>Categoria:</label>
      <input
        type='text'
        id='category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        autoFocus
        required
      />

      <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      <button disabled={loading}>Guardar</button>

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
  );
};

NoteCreateForm.propTypes = {
  token: PropTypes.string,
};

export default NoteCreateForm;
