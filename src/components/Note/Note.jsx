import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Note = ({ note }) => {
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
      <div>
        <p>{note.title}</p>
        <p>{note.text}</p>
        {note.image && (
          <img
            src={`http://localhost:3000/${note.image}`}
            alt='imagen adjunta a la nota'
          />
        )}
      </div>
      <footer>
        <NavLink to={`/edit/${note.id}`}>Editar</NavLink>
      </footer>
    </li>
  );
};

Note.propTypes = {
  note: PropTypes.object,
};

export default Note;
