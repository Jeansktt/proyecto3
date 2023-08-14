import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const getCategoryName = (categoryId) => {
  const categoryMapping = {
    1: 'Cultura y Patrimonio',
    2: 'Naturaleza y Paisajes',
    3: 'Aventuras y exploración',
    4: 'Gastronomía y Experiencias Culinarias',
    5: 'Negocios y Viajes de Trabajo',
    6: 'Historia y Tradiciones',
    7: 'Consejos y Recomendaciones de Viaje',
    8: 'Alojamiento y Hospedaje',
  };
  return categoryMapping[categoryId] || 'Unknown Category';
};

const Note = ({ note }) => {
  const imageUrl = note.image
    ? `http://localhost:8000/uploads_dir/${note.image}`
    : null;

  return (
    <li className='note'>
      <header>
        <p>@{note.username}</p>
        <time>
          {new Date(note.createdAt).toLocaleDateString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          })}
        </time>
      </header>
      <div className='contenido'>
        <p>{note.title}</p>
        <p>{note.text}</p>
        <p>{getCategoryName(note.categoryId)}</p>
        {imageUrl && (
          <div>
            <img
              src={`http://localhost:8000/uploads_dir/${note.image}`}
              alt='imagen adjunta a la nota'
            />
          </div>
        )}
      </div>
      <div className='foot-note'>
        <NavLink to={`/notes/${note.id}/edit`}>Editar</NavLink>
      </div>
    </li>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    categoryId: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Note;

