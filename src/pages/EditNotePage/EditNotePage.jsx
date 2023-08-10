import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const NoteCreateForm = ({ token, noteToEdit }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [file, setFile] = useState();
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Si noteToEdit tiene valores, establece los estados con los valores de la nota a editar
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setText(noteToEdit.text);
      setCategoryId(noteToEdit.categoryId);
    }
  }, [noteToEdit]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      if (noteToEdit) {
        await editNoteService(
          noteToEdit.id,
          title,
          text,
          categoryId,
          file,
          token
        );
      } else {
        await createnoteService(title, text, categoryId, file, token);
      }

      navigate('/');
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{noteToEdit ? 'Editar' : 'Crear'} tu nota de viaje</h2>
      {/* Resto del formulario */}
    </form>
  );
};

NoteCreateForm.propTypes = {
  token: PropTypes.string,
  noteToEdit: PropTypes.object, // Objeto de la nota a editar
};

export default NoteCreateForm;
