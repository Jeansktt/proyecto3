import useNotes from '../../hooks/useNotes';
import Note from '../../components/Note/Note';
import { NavLink } from 'react-router-dom';
import './NoteSearch.css';

const NoteSearchPage = () => {
    const { notes } = useNotes();

    return (
        <main className='note-search'>
            <div className='head'>
                <h2>Listado de notas</h2>
                <NavLink to='/'>Volver</NavLink>
            </div>
            <ul>
                {notes.length > 0 ? (
                    notes.map((note) => <Note key={note.id} note={note} />)
                ) : (
                    <li>No se encuentran notas</li>
                )}
            </ul>
        </main>
    );
};

export default NoteSearchPage;
