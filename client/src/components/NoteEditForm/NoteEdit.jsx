import React, { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
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
        navigate('/');
      } else {
        navigate('/');
      }
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{noteToEdit ? 'Editar' : 'Crear'} tu nota de viaje</h2>
    </form>
  );
};

NoteCreateForm.propTypes = {
  token: PropTypes.string,
  noteToEdit: PropTypes.object,
};

export default NoteCreateForm;
