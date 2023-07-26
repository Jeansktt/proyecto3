import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useNotes = () => {
  const { token } = useAuth();

  const [notes, setNotes] = useState([]);
  const [errorMsg, seterrorMessage] = useState('');
  const [searchParams, setsearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:8000/notes?${searchParams.toString()}`,

          {
            headers: {
              Authorization: token,
            },
          }
        );

        const body = await res.json();

        if (!res.ok) {
          throw new Error(body.message);
        }

        setNotes(body.data.notes);
      } catch (err) {
        seterrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Obtenemos las notas solo si existe el token.
    if (token) fetchNotes();
  }, [searchParams]);

  //funcion eliminar una nota
  return { notes, searchParams, setsearchParams, errorMsg, loading };
};
export default useNotes;
