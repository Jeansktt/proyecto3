import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Note = ({ note }) => {
  console.log(note);
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
        <p>{note.category}</p>
        {note.image && (
          <img
            src={`http://localhost:8000/${note.image}`}
            alt='imagen adjunta a la nota'
          />
        )}
      </div>
      <div className='foot-note'>
        <NavLink to={`/edit/${note.id}`}>Editar</NavLink>
      </div>
    </li>
  );
};

Note.propTypes = {
  note: PropTypes.object,
};

export default Note;
