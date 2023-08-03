//import './NoteSearch.css';
import useNotes from '../../hooks/useNotes';
import Note from '../../components/Note/Note';
import { NavLink } from 'react-router-dom';
import './NoteSearch.css';
const NoteSearch = () => {
  const { notes } = useNotes();

  return (
    <main className='tweet-search'>
      <div className='head'>
        <h2>listado de notas</h2>
        <NavLink to='/'>Volver</NavLink>
      </div>
      <ul>
        {notes.length > 0 ? (
          notes.map((note) => {
            return <Note key={note.id} note={note} />;
          })
        ) : (
          <li>no se encuentran notas</li>
        )}
      </ul>
    </main>
  );
};

export default NoteSearch;
