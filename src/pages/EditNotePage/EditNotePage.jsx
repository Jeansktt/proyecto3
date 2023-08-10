import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import editNoteService from '../../services/editNoteService';
import useAuth from '../../hooks/useAuth';
import useNoteById from '../../hooks/useNoteById';

const NoteCreateForm = () => {
    // Obtenemos el id de la nota que queremos editar.
    const { noteId } = useParams();
    const { token } = useAuth();
    const navigate = useNavigate();
    // Necesitamos crear un hook que permita obtener una nota por id (no vale useNotes).
    const { note } = useNoteById(noteId);

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [file, setFile] = useState();
    const [errMsg, setErrMsg] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Si existe la nota establecemos sus valores.
        if (note) {
            setTitle(note.title);
            setText(note.text);
            setCategoryId(note.categoryId);
        }
    }, [note]);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);

            await editNoteService(
                note.id,
                title,
                text,
                categoryId,
                file,
                token
            );

            navigate('/notes');
        } catch (err) {
            setErrMsg(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar nota</h2>
            <label htmlFor='title'>Titulo:</label>
            <input
                type='text'
                id='title'
                required
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

            <select
                className='categoria'
                name='category'
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
            >
                <option value=''>Selecciona una categoria</option>
                <option value='1'>Lista compra</option>
                <option value='2'>pelis</option>
            </select>

            <input type='file' onChange={(e) => setFile(e.target.files[0])} />
            <button disabled={loading}>Guardar</button>

            {errMsg && <ErrorMessage msg={errMsg} />}
        </form>
    );
};

NoteCreateForm.propTypes = {
    token: PropTypes.string,
    noteToEdit: PropTypes.object, // Objeto de la nota a editar
};

export default NoteCreateForm;