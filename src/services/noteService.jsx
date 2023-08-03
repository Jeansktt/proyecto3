const BASE_URL = 'http://localhost:8000';

const noteService = {
  // Obtener detalles de una nota por su ID
  getNoteDetails: async (noteId, token) => {
    const res = await fetch(`${BASE_URL}/notes/${noteId}`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });

    if (!res.ok) {
      const body = await res.json();
      throw new Error(body.message);
    }

    return res.json();
  },

  // Editar una nota existente
  editNote: async (noteId, data, token) => {
    const res = await fetch(`${BASE_URL}/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const body = await res.json();
      throw new Error(body.message);
    }

    return res.json();
  },
};

export default noteService;
